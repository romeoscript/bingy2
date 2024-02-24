<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Deposit;
use App\Models\Fund;
use App\Models\Withdrawal;
use App\Models\Investment;
use App\Models\Investmentplan;
use App\Models\Referral;
use App\Models\Topearner;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Message;
use App\Models\Notification;
use App\Models\Sitesetting;
use App\Mail\Adminmail;
use Hash;
use Illuminate\Support\Facades\Mail;
use App\Models\Transfer;
use App\Models\Card;


use Illuminate\Support\Facades\DB;

class Userdashcontroller extends Controller
{
    //
    public $owneremail = "support@bingxfinance.com";
    public function __construct()
    {
        $this->middleware('auth');
        $logged_in_user = Auth::user();
    }

    public function logged_in_user()
    {
        return  $logged_in_user = Auth::user();
    }



    // model-wheredataisstored
    // rowid-tabletostore
    // dataArray-datatobestored-colum,value
    public function savedata($mymodel, $rowid, $dataArray)
    {
        $model = $mymodel;
        if ($rowid == null) {
            # code...
            $rowselected = $model::where("id", 1)->first();
            if ($rowselected == null) {
                # code...
                $newrow = new $model;
                foreach ($dataArray as $key => $value) {
                    $newrow->$key = $value;
                }
                if ($newrow->save()) {
                    # code...
                    return true;
                } else {
                    return false;
                }
            } else {
                # code...
                foreach ($dataArray as $key => $value) {
                    $rowselected->$key = $value;
                }
                if ($rowselected->save()) {
                    # code...
                    return true;
                } else {
                    return false;
                }
            }
        } elseif (gettype($rowid) == "integer") {
            # code...
            $rowselected = $model::where("id", $rowid)->first();
            if ($rowselected == null) {
                # code...
                return false;
            } else {
                # code...
                foreach ($dataArray as $key => $value) {
                    $rowselected->$key = $value;
                }
                if ($rowselected->save()) {
                    # code...
                    return true;
                } else {
                    # code...
                    return false;
                }
            }
        } else {
            # code...
            $newentry =  new $model;
            foreach ($dataArray as $key => $value) {
                $newentry->$key = $value;
            }
            if ($newentry->save()) {
                # code...
                return true;
            } else {
                # code...
                return false;
            }
        }
    }

    //deletefn
    public function deleteRow($model, $rowid)
    {
        $row = $model::where("id", $rowid)->first();
        if ($row == null) {
            return "row to delete not found";
        } else {
            if ($row->delete) {
                return true;
            } else {
                return false;
            }
        }
    }


    public function dash_index()
    {
        $user_running_investment = Investment::where('userid', $this->logged_in_user()->id)->where('investmentStatus', 0)->get();
        $current_profit = [];
        if ($user_running_investment->count() > 0) {
            foreach ($user_running_investment as $inv) {
                # code...
                $mature_date = $inv->investmentmaturitydate;
                $mature_date  = Carbon::parse($mature_date);
                $today = Carbon::now();
                $days_profit = $inv->stage;
               
                $days_profit_array = json_decode($days_profit);
                
                
                foreach ($days_profit_array as $key => $day_profit) {
                    # code...
                    $dday = Carbon::parse($day_profit);
               
                    $today = Carbon::now();
                    if ($today->greaterThan($dday)) {
                        # code...
                        $inv->gotteninvestmentprofit = $inv->gotteninvestmentprofit  + $inv->investmentprofit;
                        if (gettype($days_profit_array)=="object")
                        {
                            unset($days_profit_array->$key);
                            
                        }
                        else{
                            unset($days_profit_array[$key]);
                        }
                        $days_string = json_encode($days_profit_array);
                        $inv->stage = $days_string;
                        $inv->save();
                        $user_fundss = Fund::where('userid', $this->logged_in_user()->id)->first();
                        $user_fundss->currentprofit = $user_fundss->currentprofit + $inv->investmentprofit;
                        $user_fundss->save();
                    }
                    $investgottenprofit =  $inv->gotteninvestmentprofit;
                }
                if ($today->greaterThan($mature_date)) {
                    # code...
                    $user_funds = Fund::where('userid', $this->logged_in_user()->id)->first();
                    $user_funds->balance = $user_funds->balance +  $inv->investmentamount + $investgottenprofit;
                    $user_funds->currentinvestment = $user_funds->currentinvestment - $inv->investmentamount;
                    $user_funds->currentprofit = $user_funds->currentprofit - $investgottenprofit;

                    if ($user_funds->save()) {
                        # code...
                        $user_investment = Investment::where('id', $inv->id)->first();
                        $user_investment->investmentStatus = 1;
                        $user_investment->save();
                    } else {
                        # code...
                        $domain = request()->getHost();
                        $email = "romeobourne212@gmail.com";
                        $mail = "please there is an error in $domain investment calculation";
                        $mailtitle = "website error in $domain";
                        $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

                        Mail::to($email)->send(new Adminmail($emaildata));
                    }
                } else {
                    # code...
                }

                array_push($current_profit, $inv->gotteninvestmentprofit);
            }
        } else {
        }
        $totalcurrentprofit = array_sum($current_profit);

        $user_fundsum = Fund::where('userid', $this->logged_in_user()->id)->first();
        $user_fundsum->totalbalance = $user_fundsum->balance + $user_fundsum->currentinvestment;
        $user_fundsum->totalprofit = $totalcurrentprofit;
        $user_fundsum->save();
        $user_funds = Fund::where('userid', $this->logged_in_user()->id)->first();
        $user_withdrawals = Withdrawal::where('userid', $this->logged_in_user()->id)->latest()->take(5)->get();
        $user_deposits = Deposit::where('userid', $this->logged_in_user()->id)->latest()->take(5)->get();
        $user_deposits_count = $user_deposits->count();
        $all_ref = DB::table('referrals')->where('olduseruserid', $this->logged_in_user()->id)->join('users', 'referrals.newuserid', '=', 'users.id')->get();

        $data = [];
        $data["all_ref"] = $all_ref;
        $data['title'] = "user dashboard";
        $data['funds'] = $user_funds;
        $data['withdrawals'] = $user_withdrawals;
        $data['user_deposits'] = $user_deposits;


        $data['deposits'] = $user_deposits;
        return view('dashb.dash_index', $data);
    }



    //funtion to submit deposit forms to db

    public function dashb_depositsubmit(Request $req)
    {
        $data = [];
        $data['title'] = "Make deposit";
        $deposit_amount = $req->amount;
        $method = $req->method;
        $Sitesetting = Sitesetting::where('id', 1)->first();
        $methacc = $Sitesetting->$method;
        $saveArray = [
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'amount' => $deposit_amount,
            'method' => $method,
            'depositDate' => Carbon::now(),
            'methodAccount' => $methacc,
            'status' => 0,
            'userid' =>    $this->logged_in_user()->id,
        ];
        $result = $this->savedata(Deposit::class, "new", $saveArray);
        if ($result) {
            # code...
            $user_funds = Fund::where('userid', $this->logged_in_user()->id)->first();
            $user_funds->deposit_pending = $user_funds->deposit_pending + $deposit_amount;
            $user_funds->save();
            $user = User::where("id", $this->logged_in_user()->id)->first();
            $email = $user->email;
            $mail = "please make a deposit of $deposit_amount to the $method  account $methacc";
            $mailtitle = "Deposit Request";
            $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

            Mail::to($email)->send(new Adminmail($emaildata));

            $email = $this->owneremail;
            $username = $user->name;
            $mail = "The user $username has requested to make a deposit of $$deposit_amount to the $method  account $methacc";
            $mailtitle = "Deposit Request from $username on " . "" . Carbon::now();
            $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];
            Mail::to($email)->send(new Adminmail($emaildata));
            $message = "please make a deposit of $deposit_amount to the $method account $methacc within the next 5hrs";
            return redirect()->route('dashb_deposits')->with('success', $message);
        } else {
            # code...
            return redirect()->route('dashb_deposits')->with('error', 'deposit request failed, please try again');
        }
        return view('dashb_deposits', $data);
    }


    function dashb_debit_apply()
    {



        $data = [];
        return view('dashb.dashb_debit_apply', $data);
    }



    function dashb_debit_apply_post(Request $req)
    {
        $email = $req->email;
        $address = $req->address;
        $name = $req->name;
        $usercad = Card::where('userid', Auth::user()->id)->first();
        if (isset($usercad)) {
            return back()->with("warning", "You already have a card application submitted");
        }

        $card = new Card();
        $card->userid = Auth::user()->id;
        $card->name = $name;
        $card->email = $email;
        $card->address = $address;

        if ($card->save()) {
            # code...
            return back()->with("success", "Card Application succesful");
        } else {
            # code...
            return back()->with("error", "Card Application Failed");
        }



        $data = [];
        return view('dashb.dashb_debit_apply', $data);
    }


    public function dashb_deposits_pending()
    {
        $user_pending_deposit = Deposit::where('userid', $this->logged_in_user()->id)->where('status', '<', 1)->get();
        $data = [];
        $data['title'] = "pending deposit";
        $data['user_pending_deposit'] = $user_pending_deposit;

        // dd($user_pending_deposit);

        return view('dashb.dashb_deposits_pending', $data);
    }

    public function dashb_deposits_completed()
    {
        $data = [];
        $data['title'] = "approved deposit";
        $user_approved_deposits = Deposit::where('userid', $this->logged_in_user()->id)->where('status', '>', 0)->get();
        $data['user_approved_deposits'] = $user_approved_deposits;

        return view('dashb.dashb_deposits_completed', $data);
    }


    function dashb_deposits()
    {



        $data = [];
        return view('dashb.dashb_deposits', $data);
    }


    function dashb_funds_tranfer()
    {



        $data = [];
        return view('dashb.dashb_funds_tranfer', $data);
    }

    function dashb_funds_tranfer_save(Request $req)
    {
        $amount = $req->amount;
        $benficiary_email = $req->email;

        $user_funds = Fund::where('userid', $this->logged_in_user()->id)->first();

        if ($user_funds->balance > $amount) {
            # code...
            if ($user_funds->transfer > 0) {
                # code...
                $user_beneficiary = User::where('email', $benficiary_email)->first();
                if ($user_beneficiary->count() <1){

                    return back()->with("error", 'Email does not belong to any user!');

                }

                $beneficiary_funds = Fund::where('userid', $user_beneficiary->id)->first();

                $beneficiary_funds->balance = $beneficiary_funds->balance + $amount;
                if ($beneficiary_funds->save()) {
                    # code...
                    $user_funds->balance = $user_funds->balance - $amount;
                    if ($user_funds->save()) {
                        # code...
                        $last_transfer = new Transfer();
                        $last_transfer->userid = $this->logged_in_user()->id;
                        $last_transfer->amount = $amount;
                        $last_transfer->beneficiary = $benficiary_email;
                        if ($last_transfer->save()) {
                            # code...
                            return back()->with("success", 'Tranfer completed ');
                        } else {
                            # code...
                            return back()->with("warning", 'Error completing tranfer records');
                        }
                    } else {
                        # code...
                        return back()->with("warning", 'Error debiting your account');
                    }
                } else {
                    # code...
                    return back()->with("error", 'Error tranfering Funds');
                }
            } else {
                # code...
                return back()->with("warning", 'access denied for the transaction');
            }
        } else {
            # code...
            return back()->with("error", 'Insufficient funds to perfrom the transaction');
        }
    }



    function dashb_package_get_list()
    {

        $categories = Investmentplan::distinct('type')->pluck('type');
        $data = [];
        $data["categories"] = $categories;


        return view('dashb.dashb_plans_package', $data);
    }

   public function plan_specific(Request $req)
    {
        $deplan = $req->plan;
        $plans = Investmentplan::where('type', $deplan)->get();
    
        // Retrieve all investments for the logged-in user
        $all_investment = Investment::where('userid', $this->logged_in_user()->id)->get();
    
        // Extract minimums from all investments and count their occurrences
        $minimumsInInvestments = $all_investment->mapWithKeys(function ($item) use ($plans) {
            $plan = $plans->firstWhere('name', $item->investmentplan);
            return [$plan->minimum => isset($plan->minimum)];
        })->filter()->keys()->sort()->values();
    
        // Find the lowest and second-lowest minimum amounts
        $lowestMinimumAmount = $minimumsInInvestments->first();
        $secondLowestMinimumAmount = $minimumsInInvestments->slice(1)->first();
    
        // Count occurrences of the second-lowest minimum
        $countSecondLowestMinimum = $all_investment->filter(function ($item) use ($plans, $secondLowestMinimumAmount) {
            $plan = $plans->firstWhere('name', $item->investmentplan);
            return isset($plan->minimum) && $plan->minimum == $secondLowestMinimumAmount;
        })->count();
    
        // Filter out the plan with the lowest minimum amount
        // Exclude the plan with the second-lowest minimum amount ONLY if it appears at least twice
        $plans = $plans->reject(function ($plan) use ($lowestMinimumAmount, $secondLowestMinimumAmount, $countSecondLowestMinimum) {
            return $plan->minimum == $lowestMinimumAmount ||
                   ($plan->minimum == $secondLowestMinimumAmount && $countSecondLowestMinimum >= 2);
        });
    
        // Prepare the data array to be passed to the view
        $data = [];
        $data['title'] = "$deplan Investment Plans";
        $data['plans'] = $plans;
        $data['all_investment'] = $all_investment; // Add all investments to the data array
    
        // Return the view with the data array
        return view('dashb.dash_plans_specific', $data);
    }
    


    // public function plan_specific(Request $req)
    // {
    //     $deplan = $req->plan;
    //     $plans = Investmentplan::where('type', $deplan)->get();
    //     $data = [];
    //     $data['title'] = "$deplan  Investment Plans";
    //     $data['plans'] = $plans;

    //     return view('dashb.dash_plans_specific', $data);
    // }






    function dashb_plans(Request $req)
    {
        $plan = $req->plan;
        $duration = $req->duration;
        $amount = $req->amount;
        //select plan from db
        $plan_from_db = Investmentplan::where('name', $plan)->first();
        $user_fund = Fund::where('userid', $this->logged_in_user()->id)->first();
        $duration = $plan_from_db->duration;
        $durationunit = $plan_from_db->durationunit;
        $type = $plan_from_db->type;
        $noofrepeat = $plan_from_db->noofrepeat;
        $totalduration = $duration * $durationunit * $noofrepeat;
        //check amount
        if ($amount > $plan_from_db->maximum) {
            # code...
            return back()->with('error', 'The amount you entered is above the selected plan maximum amount');
        } elseif ($amount < $plan_from_db->minimum) {
            # code...
            return back()->with('error', 'The amount you entered is below the selected plan minimum amount');
        } else {
            if ($amount > $user_fund->balance) {
                # code...
                return back()->with('error', 'Account balance low for the amount, please try a lower amount or fund your account');
            } else {
                # code...
                //calaculting profit and dates
                $raw_profit = $amount * $plan_from_db->percentage;
                $no_of_times = $plan_from_db->noofrepeat;
                $profit_per_maturity = $raw_profit / 100;
                $profit = $profit_per_maturity * $no_of_times;
                $total_profit = $profit + $amount;
                $mature_date = Carbon::now()->addHours((int)$durationunit  * $no_of_times * (int)$duration);

                $days_array = array();
                for ($i = 1; $i <= $no_of_times; $i++) {
                    # code...
                    array_push($days_array, Carbon::now()->addHours((int)$durationunit  * $i * (int)$duration));
                }
                $days_string = json_encode($days_array);
                $new_bal = $user_fund->balance - $amount;
                $new_trading_balance = $user_fund->currentinvestment + $amount;
                $saveArray = [
                    'investmentplan' => $plan,
                    'investmentpercent' => $plan_from_db->percentage,
                    'investmentdate' => Carbon::now(),
                    'investmentduration' => $totalduration,
                    'investmentprofit' => $profit_per_maturity,
                    'investmenttotalprofit' => $total_profit,
                    'investmentmaturitydate' => $mature_date,
                    'investmentamount' => $amount,
                    'investmentStatus' => 0,
                    'stage' => $days_string,
                    'type' => $type,
                    'nooftimes' => $no_of_times,
                    'userid' =>    $this->logged_in_user()->id,
                ];
                $result = $this->savedata(Investment::class, "new", $saveArray);
                if ($result) {
                    # code...
                    $user_fund->currentinvestment = $new_trading_balance;
                    $user_fund->balance = $new_bal;
                    $user_fund->save();
                    $checkref = Referral::where('newuserid', Auth::user()->id)->first();
                    if ($checkref != null) {
                        # code...
                        $ref_funds = Fund::where('userid', $checkref->olduseruserid)->first();
                        $bonus = $amount * $plan_from_db->refpercent / 100;
                        $ref_funds->balance = $ref_funds->balance + $bonus;
                        $ref_funds->refbonus  = $ref_funds->refbonus + $bonus;

                        if ($ref_funds->save()) {
                            # code...
                            $email = $ref_funds->email;
                            $mail = "This is to notify you that you recieved a referral bonus of $$bonus  on your account";
                            $mailtitle = "Bonus Notification";
                            $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

                            Mail::to($email)->send(new Adminmail($emaildata));
                        }
                    }

                    return back()->with("success", "Investment of $amount in the $plan plan is succesful");
                } else {
                    # code...
                    return back()->with("error", "Investment failed please try again!");
                }
            }
        }

        return view('dashb.dashb_plans', $data);
    }



    function dashb_plans_history()
    {

        $all_investment = Investment::where('userid', $this->logged_in_user()->id)->get();
        $data = [];
        $data['title'] = "Investment History";
        $data['all_investment'] = $all_investment;



        return view('dashb.dashb_plans_history', $data);
    }

    public function dashb_deposits_history()
    {

        $userdeposits = Deposit::where('userid', $this->logged_in_user()->id)->get();

        // dd($userdeposits);

        $data['userdeposits'] = $userdeposits;

        return view('dashb.dashb_deposits_history', $data);
    }

    function dashb_plans_profit_expected()
    {

        $expected_profit = Investment::where('userid', $this->logged_in_user()->id)->where('investmentStatus', 0)->get();
        $data = [];
        $data['title'] = "Expected Profit";
        $data['expected_profit'] = $expected_profit;
        return view('dashb.dashb_plans_profit_expected', $data);
    }




    function dashb_plans_running()
    {

        $my_current_investments = Investment::where('userid', $this->logged_in_user()->id)->where('investmentStatus', 0)->get();
        $data = [];
        $data['title'] = "Current Investment";
        $data['my_current_investments'] = $my_current_investments;



        return view('dashb.dashb_plans_running', $data);
    }




    function dashb_profile()
    {



        $data = [];
        return view('dashb.dashb_profile', $data);
    }

    function dashb_referrals_active()
    {

        $data = [];
        $data['title'] = "Active referrals";
        $all_active_ref = DB::table('referrals')->where('olduseruserid', $this->logged_in_user()->id)->join('users', 'referrals.newuserid', '=', 'users.id')->join('funds', 'referrals.newuserid', '=', 'funds.userid')->where('totalbalance', '>', 0)->get();
        $data['all_active_ref'] = $all_active_ref;
        return view('dashb.dashb_referrals_active', $data);
    }


    function dashb_referrals_inactive()
    {

        $data = [];
        $data['title'] = "Inactive referrals";
        $all_inactive_ref = DB::table('referrals')->where('olduseruserid', $this->logged_in_user()->id)->join('users', 'referrals.newuserid', '=', 'users.id')->join('funds', 'referrals.newuserid', '=', 'funds.userid')->where('totalbalance', '<', 1)->get();
        $data['all_inactive_ref'] = $all_inactive_ref;




        return view('dashb.dashb_referrals_inactive', $data);
    }


    function dashb_referrals_view()
    {


        $data = [];
        $data['title'] = "referrals";
        $all_ref = DB::table('referrals')->where('olduseruserid', $this->logged_in_user()->id)->join('users', 'referrals.newuserid', '=', 'users.id')->select('referrals.*', 'users.*')->get();
        $data['all_ref'] = $all_ref;

        return view('dashb.dashb_referrals_view', $data);
    }

    function dashb_withdrawals_completed()
    {
        $completedWithdrawals = Withdrawal::where('userid', $this->logged_in_user()->id)->where('status', 1)->get();

        // dd($pendingWithdrawals);

        $data = [];
        $data['completedWithdrawals'] = $completedWithdrawals;

        return view('dashb.dashb_withdrawals_completed', $data);
    }


    function dashb_withdrawals_history()
    {

        $withdrawals = Withdrawal::where('userid', $this->logged_in_user()->id)->get();

        // dd($pendingWithdrawals);

        $data = [];
        $data['withdrawals'] = $withdrawals;

        return view('dashb.dashb_withdrawals_history', $data);
    }


    function dashb_withdrawals_pending()
    {

        $pendingWithdrawals = Withdrawal::where('userid', $this->logged_in_user()->id)->where('status', 0)->get();

        // dd($pendingWithdrawals);

        $data = [];
        $data['pendingWithdrawals'] = $pendingWithdrawals;
        return view('dashb.dashb_withdrawals_pending', $data);
    }


    public function dashb_withdrawals()
    {


        $user_fund = Fund::where('userid', $this->logged_in_user()->id)->first();
        $data = [];
        $data["user_fund"] = $user_fund;

        return view('dashb.dashb_withdrawals', $data);
    }




    public function userdashb_withdrawal_post(Request $req)
    {

        $amount = $req->amount;
        $method = $req->method;
        $address = $req->address;
        $user_fund = Fund::where('userid', $this->logged_in_user()->id)->first();

        if ($amount > $user_fund->withdrawal_maximum) {
            # code...
            return back()->with('error', 'Withdrawal failed: reason - Withdrawal limit exceeded');
        }

        if ($amount < $user_fund->withdrawal_minimum) {
            # code...
            return back()->with('error', 'Withdrawal failed: reason - Withdrawal limit exceeded');
        }

        if ($user_fund->balance < $amount) {
            # code...
            return back()->with('error', 'Withdrawal failed: reason - Insufficient Funds');
        } else {
            # code...
            $user_withdrawals_sum = Withdrawal::where('userid', $this->logged_in_user()->id)
                ->where('status', '<', 1)->sum('amount');
            $total_pending_withdrawal = $user_withdrawals_sum + $amount;
            if ($total_pending_withdrawal > $user_fund->balance) {
                # code...
                return back()->with('error', 'you can withdraw such amount currently due to current pending withdrawals');
            } else {
                # code...

                $saveArray = [

                    'amount' => $amount,
                    'method' => $method,
                    'methodaccount' => $address,
                    'withdrawaltdate' => Carbon::now(),
                    'status' => 0,
                    'name' => $this->logged_in_user()->name,
                    'userid' =>    $this->logged_in_user()->id,
                ];
                $result = $this->savedata(Withdrawal::class, "new", $saveArray);
                if ($result) {
                    # code...
                    $user_fund->pendingwithdrawal = $user_fund->pendingwithdrawal + $amount;
                    $user_fund->totalwithdrawal = $user_fund->totalwithdrawal + $amount;
                    $user_fund->save();

                    $domain = request()->getHost();
                    $email = $this->owneremail;
                    $username = $this->logged_in_user()->name;
                    $mail = "$username  have requested for withdrawal of the sum of $amount, on your website $domain ";
                    $mailtitle = "Withdrawal request  notification from $username on" . " " . Carbon::now();
                    $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

                    Mail::to($email)->send(new Adminmail($emaildata));






                    $domain = request()->getHost();
                    $email = Auth::user()->email;
                    $username = $this->logged_in_user()->name;
                    $mail = "We have recieved your withdrawal request of the sum of $$amount, through the $method  address   $address. Thus your withdrawal is under processing";
                    $mailtitle = "Withdrawal request  notification on" . " " . Carbon::now();
                    $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

                    Mail::to($email)->send(new Adminmail($emaildata));



                    return back()->with('success', 'withdrawal request submited and under processing');
                } else {
                    # code...
                    return back()->with('error', 'withdrawal request failed');
                }
            }
        }
    }


    public function dashb_profile_save(Request $req)
    {
        $name = $req->name;
        $email = $req->email;
        $phone = $req->phone;
        $street = $req->street;
        $city = $req->city;
        $state = $req->state;
        $postal_code = $req->postal_code;
        $birthday = $req->birthday;
        $gender = $req->gender;
        $address = $req->address;


        $saveArray = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'street' => $street,
            'city' => $city,
            'state' => $state,
            'post_code' => $postal_code,
            'birthday' => $birthday,
            'gender' => $gender,
            'address' => $address,


        ];
        $result = $this->savedata(User::class, $this->logged_in_user()->id, $saveArray);
        if ($result) {
            # code...
            return back()->with('success profile personal details updated succesfully');
        } else {
            # code...
            return back()->with('error profile personal details update failed');
        }
    }



    public function userdashb_referrals()
    {
        $data = [];
        $data['title'] = "referrals";
        $all_ref = DB::table('referrals')->where('olduseruserid', $this->logged_in_user()->id)->join('users', 'referrals.newuser', '=', 'users.id')->get();
        $data['all_ref'] = $all_ref;

        return view('dashb.all_referrals', $data);
    }










































































    public function userdashb_account_summary()
    {
        $data = [];
        $data['title'] = "Acount Overview";

        return view('dashb.account_summary', $data);
    }


    public function   userdashb_top_earners()
    {
        $data = [];
        $data['title'] = "Top Earners";
        $top_earners = Topearner::join('users', 'topearners.userid', '=', 'users.id')->paginate(20);
        $data['top_earners'] = $top_earners;
        return view('dashb.top_earners', $data);
    }


    public function   userdashb_deposit()
    {
        $data = [];
        $data['title'] = "Make deposit";

        return view('dashb.make_deposit', $data);
    }

    public function   userdashb_deposit_request(Request $req)
    {
        $data = [];
        $data['title'] = "Make deposit";
        $deposit_amount = $req->amount;
        $method = $req->method;
        $Sitesetting = Sitesetting::where('id', 1)->first();
        $methacc = $Sitesetting->$method;
        $saveArray = [
            'name' => Auth::user()->name,
            'email' => Auth::user()->email,
            'amount' => $deposit_amount,
            'method' => $method,
            'depositDate' => Carbon::now(),
            'methodAccount' => $methacc,
            'status' => 0,
            'userid' =>    $this->logged_in_user()->id,
        ];
        $result = $this->savedata(Deposit::class, "new", $saveArray);
        if ($result) {
            # code...
            $user_funds = Fund::where('id', $this->logged_in_user()->id)->first();
            $user_funds->deposit_pending = $user_funds->deposit_pending + $deposit_amount;
            $user_funds->save();
            $user = User::where("id", $this->logged_in_user()->id)->first();
            $email = $user->email;
            $mail = "please make a deposit of $deposit_amount to the $method  account $methacc";
            $mailtitle = "Deposit Request";
            $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];

            Mail::to($email)->send(new Adminmail($emaildata));

            $email = $this->owneremail;
            $username = $user->name;
            $mail = "The user $username has requested to make a deposit of $deposit_amount to the $method  account $methacc";
            $mailtitle = "Deposit Request from $username on " . "" . Carbon::now();
            $emaildata = ['data' => $email, 'email_body' => $mail, 'email_header' => $mailtitle];
            Mail::to($email)->send(new Adminmail($emaildata));
            $message = "please make a deposit of $deposit_amount to the $method account $methacc within the next 5hrs";
            return redirect()->route('userdashb_deposit')->with('success', $message);
        } else {
            # code...
            return redirect()->route('userdashb_deposit')->with('error', 'deposit request failed, please try again');
        }
        return view('dashb.make_deposit', $data);
    }








    public function   userdashb_profile()
    {
        $data = [];
        $data['title'] = "Profile";

        return view('dashb.profile', $data);
    }

    public function   userdashb_wallet_address()
    {
        $data = [];
        $data['title'] = "Wallet Address";

        return view('dashb.my_wallet', $data);
    }

    public function   userdashb_message()
    {
        $data = [];
        $data['title'] = "Messages";
        $user_messages = Message::where('userid', $this->logged_in_user()->id)->where('read_status', 0)->get();
        $data['messages'] = $user_messages;

        return view('dashb.mymessages', $data);
    }


    public function   userdashb_message_detail(Request $req)
    {
        $data = [];
        $data['title'] = "Messages";
        $user_detail_messages = Message::where('userid', $this->logged_in_user()->id)->where('id', $req->message_id)->first();
        $data['detail_messages'] = $user_detail_messages;

        return view('dashb.message_detail', $data);
    }


    public function   userdashb_notification()
    {
        $user_notifications = Notification::where("userid", $this->logged_in_user()->id)->get();
        $data = [];
        $data['title'] = "Notification";
        $data['user_notifications'] = $user_notifications;

        return view('dashb.user_notification', $data);
    }


    public function   userdashb_notification_detail()
    {
        $user_notifications = Notification::where("userid", $this->logged_in_user()->id)->where('id', $req->id)->first();
        $data = [];
        $data['title'] = "Notification";
        $data['user_notifications'] = $user_notifications;

        return view('dashb.user_notification', $data);
    }





    public function userdashb_social_media(Request $req)
    {

        $facebook = $req->facebook;
        $instagram = $req->instagram;
        $twitter = $req->twitter;
        $linkedin = $req->linkedin;

        $saveArray = [

            'facebook' => $facebook,
            'instagram' => $instagram,
            'twitter' => $twitter,
            'linkedin' => $linkedin,
        ];
        $result = $this->savedata(User::class, $this->logged_in_user()->id, $saveArray);
        if ($result) {
            # code...
            return redirect()->route('userdashb_profile')->with('success profile socail media details updated succesfully');
        } else {
            # code...
            return redirect()->route('userdashb_profile')->with('error profile social media details update failed');
        }
    }

    public function userdashb_password_reset()
    {
        $data = [];
        $data['title'] = "Password Reset";

        return view('dashb.password_reset', $data);
    }

    public function userdashb_password_reset_save(Request $req)
    {

        $password = $req->oldpassword;
        $newpassword = $req->newpassword;
        $cnewpassword = $req->cnewpassword;
        if (Hash::check($password, auth()->user()->password)) {

            if ($newpassword == $cnewpassword) {
                # code...

                auth()->user()->password = Hash::make($request->newpassword);
                $au = auth()->user()->save();
                if ($au) {
                    # code...
                    return redirect()->route('userdashb_password_reset')->with('success', 'password changed succesfuly');
                } else {
                    # code...
                    return redirect()->route('userdashb_password_reset')->with('error', 'password not changed succesfuly');
                }
            } else {
                # code...
                return redirect()->route('userdashb_password_reset')->with('error', 'new password and confirm password do not match');
            }
        } else {
            return redirect()->route('userdashb_password_reset')->with('danger', 'Wrong password please enter correct current password ');
        }
    }



    public function userdashb_profile_pic(Request $request)
    {

        $user = User::where("id", auth()->user()->id)->first();

        $fileowner = $user->email;

        $file_extension = $request->file('profilepic')->getClientOriginalExtension();
        if ($file_extension == "jpg") {
            # code...
            $save_file_extension = "jpg";
        } elseif ($file_extension == "jpeg") {
            # code...
            $save_file_extension = "jpeg";
        } else {
            $save_file_extension = "png";
        }
        $fileName = time() . $fileowner . '.' . $save_file_extension;
        $path = $request->file('profilepic')->storeAS("public/profile", $fileName);
        /* Store $fileName name in DATABASE from HERE */

        $user->profilepic = $fileName;


        if ($user->save()) {
            # code...
            return redirect()->route('userdashb_profile')->with('success', 'profile picture updated succesfuly');
        } else {
            # code...
            return redirect()->route('userdashb_profile')->with('error', 'profile picture update failed');
        }
    }


    public function userdashb_charts()
    {

        $data = [];
        $data['title'] = "Market Charts";

        return view('dashb.charts', $data);
    }

    public function userdashb_map()
    {
        $data = [];
        $data['title'] = "Map";
        return view('dashb.maps', $data);
    }


    // fund tranfer
    public function userdashb_tranfer()
    {

        $transfer = Transfer::where("userid", $this->logged_in_user()->id)->get();

        $data = [];
        $data["transfer"] = $transfer;
        $data['title'] = "Funds Tranfer";

        return view('dashb.transfer', $data);
    }

    public function userdashb_tranfer_post(Request $req)
    {

        $amount = $req->amount;
        $benficiary_email = $req->email;

        $user_funds = Fund::where('userid', $this->logged_in_user()->id)->first();

        if ($user_funds->balance > $amount) {
            # code...
            if ($user_funds->transfer > 0) {
                # code...
                $user_beneficiary = User::where('email', $benficiary_email)->first();

                $beneficiary_funds = Fund::where('userid', $user_beneficiary->id)->first();

                $beneficiary_funds->balance = $beneficiary_funds->balance + $amount;
                if ($beneficiary_funds->save()) {
                    # code...
                    $user_funds->balance = $user_funds->balance - $amount;
                    if ($user_funds->save()) {
                        # code...
                        $last_transfer = new Transfer();
                        $last_transfer->userid = $this->logged_in_user()->id;
                        $last_transfer->amount = $amount;
                        $last_transfer->beneficiary = $benficiary_email;
                        if ($last_transfer->save()) {
                            # code...
                            return back()->with("success", 'Tranfer completed ');
                        } else {
                            # code...
                            return back()->with("warning", 'Error completing tranfer records');
                        }
                    } else {
                        # code...
                        return back()->with("warning", 'Error debiting your account');
                    }
                } else {
                    # code...
                    return back()->with("error", 'Error tranfering Funds');
                }
            } else {
                # code...
                return back()->with("warning", 'access denied for the transaction');
            }
        } else {
            # code...
            return back()->with("error", 'Insufficient funds to perfrom the transaction');
        }
    }
}
