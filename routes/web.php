<?php

use App\Mail\Adminmail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('testemail', function () {
    return new Adminmail ;
});

Route::get('/logout', 'App\Http\Controllers\Auth\LoginController@logout');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes(['verify' => true]);


//ADMIN
//admin index
Route::get('/nanoadmin', [App\Http\Controllers\adminController::class, 'adminindex'])->name('adminindex');
Route::post('/post_company_settings', [App\Http\Controllers\adminController::class, 'post_company_settings'])->name('post_company_settings');

Route::post('/password_reset_save', [App\Http\Controllers\adminController::class, 'password_reset_save'])->name('password_reset_save');

//admin and account management
Route::get('/account_all', [App\Http\Controllers\adminController::class, 'account_all'])->name('account_all');
Route::get('/account_active', [App\Http\Controllers\adminController::class, 'account_active'])->name('account_active');

Route::get('/account_all_email_unverified', [App\Http\Controllers\adminController::class, 'account_all_email_unverified'])->name('account_all_email_unverified');

Route::get('/account_all_email_verified', [App\Http\Controllers\adminController::class, 'account_all_email_verified'])->name('account_all_email_verified');

Route::get('/account_inactive', [App\Http\Controllers\adminController::class, 'account_inactive'])->name('account_inactive');


//admin and deposit managemant
Route::get('/deposits_active', [App\Http\Controllers\adminController::class, 'deposits_active'])->name('deposits_active');
Route::get('/deposits_pending', [App\Http\Controllers\adminController::class, 'deposits_pending'])->name('deposits_pending');
Route::get('/deposits_all', [App\Http\Controllers\adminController::class, 'deposits_all'])->name('deposits_all');

Route::get('/viewdeposit/{id}', [App\Http\Controllers\adminController::class, 'viewdeposit'])->name('viewdeposit');



//admin and withdrawal managemant

Route::get('/withdrawals_all', [App\Http\Controllers\adminController::class, 'withdrawals_all'])->name('withdrawals_all');
Route::get('/withdrawals_completed', [App\Http\Controllers\adminController::class, 'withdrawals_completed'])->name('withdrawals_completed');
Route::get('/withdrawals_pending', [App\Http\Controllers\adminController::class, 'withdrawals_pending'])->name('withdrawals_pending');


//admin Transactions

Route::get('/transactions_all', [App\Http\Controllers\adminController::class, 'transactions_all'])->name('transactions_all');

Route::get('/transactions_completed', [App\Http\Controllers\adminController::class, 'transactions_completed'])->name('transactions_completed');

Route::get('/transactions_pending', [App\Http\Controllers\adminController::class, 'transactions_pending'])->name('transactions_pending');

//admin create and manage investment plans
Route::post('/createinvestmentplan', [App\Http\Controllers\adminController::class, 'createinvestmentplan'])->name('createinvestmentplan');
Route::get('/investmentplans', [App\Http\Controllers\adminController::class, 'investmentplans'])->name('investmentplans');

Route::post('/editinvestment', [App\Http\Controllers\adminController::class, 'editinvestment'])->name('editinvestment');
Route::get('/deleteinvestment/{id}', [App\Http\Controllers\adminController::class, 'deleteinvestment'])->name('deleteinvestment');
Route::post('/admin_make_investment_for_user', [App\Http\Controllers\adminController::class, 'admin_make_investment_for_user'])->name('admin_make_investment_for_user');


Route::get('/deleteinvestmentplan/{id}', [App\Http\Controllers\adminController::class, 'deleteinvestmentplan'])->name('deleteinvestmentplan');
Route::post('/editinvestmentplan', [App\Http\Controllers\adminController::class, 'editinvestmentplan'])->name('editinvestmentplan');

//faqs delete and edit
// Route::get('/viewnews', [App\Http\Controllers\adminController::class, 'viewnews'])->name('viewnews');
Route::get('/faqs_view', [App\Http\Controllers\adminController::class, 'faqs_view'])->name('faqs_view');
Route::post('/faqs_edit', [App\Http\Controllers\adminController::class, 'faqs_edit'])->name('faqs_edit');
Route::get('/faqs_delete/{id}', [App\Http\Controllers\adminController::class, 'faqs_delete'])->name('faqs_delete');
Route::post('/faqs_save', [App\Http\Controllers\adminController::class, 'faqs_save'])->name('faqs_save');


//bonus
Route::post('/bonus_send', [App\Http\Controllers\adminController::class, 'bonus_send'])->name('bonus_send');
Route::get('/bonus_view_id/{id}', [App\Http\Controllers\adminController::class, 'bonus_view_id'])->name('bonus_view_id');

Route::get('/bonus_view', [App\Http\Controllers\adminController::class, 'bonus_view'])->name('bonus_view');


Route::get('/bonus_send', [App\Http\Controllers\adminController::class, 'bonus_send'])->name('bonus_send');

//penalty send
//penalty
Route::get('/penalty_view_id/{id}', [App\Http\Controllers\adminController::class, 'penalty_view_id'])->name('penalty_view_id');

Route::get('/penalty_view', [App\Http\Controllers\adminController::class, 'penalty_view'])->name('penalty_view');


Route::post('/penalty_send', [App\Http\Controllers\adminController::class, 'penalty_send'])->name('penalty_send');

//read emails

Route::get('/emails_read', [App\Http\Controllers\adminController::class, 'emails_read'])->name('emails_read');
Route::get('/emails_send_bulk', [App\Http\Controllers\adminController::class, 'emails_send_bulk'])->name('emails_send_bulk');

Route::get('/sendemail/{id}', [App\Http\Controllers\adminController::class, 'emails_send_bulk'])->name('sendemailid');

Route::post('/sendmail', [App\Http\Controllers\adminController::class, 'sendmail'])->name('sendmail');

//Charges Set
Route::get('/charges_set', [App\Http\Controllers\adminController::class, 'charges_set'])->name('charges_set');
Route::post('/charges_set_save', [App\Http\Controllers\adminController::class, 'charges_set_save'])->name('charges_set_save');



//statistics set
Route::get('/statistics_set', [App\Http\Controllers\adminController::class, 'statistics_set'])->name('statistics_set');

//statistics set
Route::post('/statistics_set_post', [App\Http\Controllers\adminController::class, 'statistics_set_post'])->name('statistics_set_post');


//messages
Route::get('/message_read', [App\Http\Controllers\adminController::class, 'message_read'])->name('message_read');


Route::get('/message_send', [App\Http\Controllers\adminController::class, 'message_send'])->name('message_send');


Route::get('/account_view_user/{id}', [App\Http\Controllers\adminController::class, 'account_view_user'])->name('account_view_user');



// //activate and deactivate funds tranfer

Route::get('/activate_fund_tranfer/{id}', [App\Http\Controllers\adminController::class, 'activate_fund_tranfer'])->name('activate_fund_tranfer');
Route::get('/deactivate_fund_tranfer/{id}', [App\Http\Controllers\adminController::class, 'deactivate_fund_tranfer'])->name('deactivate_fund_tranfer');


Route::get('/userdelete/{id}', [App\Http\Controllers\adminController::class, 'userdelete'])->name('userdelete');
Route::get('/adminunblockuser/{id}', [App\Http\Controllers\adminController::class, 'adminunblockuser'])->name('adminunblockuser');
Route::get('/adminblockuser/{id}', [App\Http\Controllers\adminController::class, 'adminblockuser'])->name('adminblockuser');


Route::post('/depositupdate', [App\Http\Controllers\adminController::class, 'depositupdate'])->name('depositupdate');
Route::get('/deletedeposit/{id}', [App\Http\Controllers\adminController::class, 'deletedeposit'])->name('deletedeposit');
Route::post('/admin_adddeposit', [App\Http\Controllers\adminController::class, 'admin_adddeposit'])->name('admin_adddeposit');
Route::post('/editwithdrawal', [App\Http\Controllers\adminController::class, 'editwithdrawal'])->name('editwithdrawal');
Route::get('/deletewithdrawal/{id}', [App\Http\Controllers\adminController::class, 'deletewithdrawal'])->name('deletewithdrawal');
Route::post('/admin_addwithdrawal', [App\Http\Controllers\adminController::class, 'admin_addwithdrawal'])->name('admin_addwithdrawal');
Route::get('/markwithdrawalpaid/{id}', [App\Http\Controllers\adminController::class, 'markwithdrawalpaid'])->name('markwithdrawalpaid');

Route::post('/user_password_reset_by_admin', [App\Http\Controllers\adminController::class, 'user_password_reset_by_admin'])->name('user_password_reset_by_admin');
Route::post('/user_profile_update_by_admin', [App\Http\Controllers\adminController::class, 'user_profile_update_by_admin'])->name('user_profile_update_by_admin');

// //referals
Route::get('/viewuserreferrals{id}', [App\Http\Controllers\adminController::class, 'viewuserreferrals'])->name('viewuserreferrals');

Route::get('/referrals', [App\Http\Controllers\adminController::class, 'referrals'])->name('referrals');
Route::get('/payreferral/{id}', [App\Http\Controllers\adminController::class, 'payreferral'])->name('payreferral');

Route::get('/delreferral/{id}', [App\Http\Controllers\adminController::class, 'delreferral'])->name('delreferral');
Route::get('/refsetting', [App\Http\Controllers\adminController::class, 'refsetting'])->name('refsetting');

Route::get('/allreferrals', [App\Http\Controllers\adminController::class, 'allreferrals'])->name('allreferrals');

Route::get('/approve_deposit/{id}', [App\Http\Controllers\adminController::class, 'approve_deposit'])->name('approve_deposit');

Route::get('/cards', [App\Http\Controllers\adminController::class, 'cards'])->name('cards');


//manipulate user balances
Route::post('/editbalance', [App\Http\Controllers\adminController::class, 'editbalance'])->name('editbalance');
























//











// // email and top earners routes


// Route::get('/emailmgt', [App\Http\Controllers\adminController::class, 'emailmgt'])->name('emailmgt');


// Route::get('/sendemail', [App\Http\Controllers\adminController::class, 'sendbulkemail'])->name('sendbulkemail');






// //routes to preven error


// Route::get('/savenews', [App\Http\Controllers\adminController::class, 'pages'])->name('savenews');



// //admin post request
// Route::post('/savecompanydetails', [App\Http\Controllers\adminController::class, 'savecompanydetails'])->name('savecompanydetails');
// Route::post('/savecompanyabout', [App\Http\Controllers\adminController::class, 'savecompanyabout'])->name('savecompanyabout');


// Route::get('/admingetrdelete/{id}', [App\Http\Controllers\adminController::class, 'adminuserdelete'])->name('adminuserdelete');
// Route::get('/admingetlock/{id}', [App\Http\Controllers\adminController::class, 'adminunblock'])->name('adminunblock');
// Route::get('/admingetck/{id}', [App\Http\Controllers\adminController::class, 'adminblock'])->name('adminblock');


// // admin withdrawal and deposit



// Route::post('/updateuser', [App\Http\Controllers\adminController::class, 'updateuser'])->name('updateuser');





// Route::get('/pendingwithdrawals', [App\Http\Controllers\adminController::class, 'pendingwithdrawals'])->name('pendingwithdrawals');
// Route::get('/approvedwithdrawals', [App\Http\Controllers\adminController::class, 'approvedwithdrawals'])->name('approvedwithdrawals');







// // newssection
// Route::post('/savenews', [App\Http\Controllers\adminController::class, 'savenews'])->name('savenews');
// Route::get('/news', [App\Http\Controllers\adminController::class, 'news'])->name('news');

// Route::post('/editnews', [App\Http\Controllers\adminController::class, 'editnews'])->name('editnews');
// Route::get('/deletenews/{id}', [App\Http\Controllers\adminController::class, 'deletenews'])->name('deletenews');


// //top earners
// Route::get('/topearners', [App\Http\Controllers\adminController::class, 'topearners'])->name('topearners');
// Route::get('/deltopearners{id}', [App\Http\Controllers\adminController::class, 'deltopearners'])->name('deltopearners');
// Route::get('/addtopearners{id}', [App\Http\Controllers\adminController::class, 'addtopearners'])->name('addtopearners');

// //payment settings
// Route::get('/payments_settings', [App\Http\Controllers\adminController::class, 'payments_settings'])->name('payments_settings');
// Route::post('/post_payments_settings', [App\Http\Controllers\adminController::class, 'post_payments_settings'])->name('post_payments_settings');





// //activate and deactivate funds tranfer

// Route::get('/activate_fund_tranfer/{id}', [App\Http\Controllers\adminController::class, 'activate_fund_tranfer'])->name('activate_fund_tranfer');
// Route::get('/deactivate_fund_tranfer/{id}', [App\Http\Controllers\adminController::class, 'deactivate_fund_tranfer'])->name('deactivate_fund_tranfer');


Route::get('/testimonials', [App\Http\Controllers\adminController::class, 'testimonials'])->name('testimonials');

Route::post('/storeTestimonials', [App\Http\Controllers\adminController::class, 'storeTestimonials'])->name('storeTestimonials');




// //withdrawal limit
// Route::post('/setwithdrawal_limit', [App\Http\Controllers\adminController::class, 'setwithdrawal_limit'])->name('setwithdrawal_limit');


// //activate and block account






// //testimoney
// Route::get('/testimony_view', [App\Http\Controllers\adminController::class, 'testimony_view'])->name('testimony_view');

// Route::get('/testimony_add', [App\Http\Controllers\adminController::class, 'testimony_add'])->name('testimony_add');




















































//new user dashboard

Route::get('/dash_index', [App\Http\Controllers\Userdashcontroller::class, 'dash_index'])->name('dash_index');

Route::get('/dashb_debit_apply', [App\Http\Controllers\Userdashcontroller::class, 'dashb_debit_apply'])->name('dashb_debit_apply');

Route::post('/dashb_debit_apply_post', [App\Http\Controllers\Userdashcontroller::class, 'dashb_debit_apply_post'])->name('dashb_debit_apply_post');


Route::get('/dashb_deposits_completed', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits_completed'])->name('dashb_deposits_completed');

Route::get('/dashb_deposits_history', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits_history'])->name('dashb_deposits_history');

Route::get('/dashb_deposits_pending', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits_pending'])->name('dashb_deposits_pending');

Route::get('/dashb_deposits', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits'])->name('dashb_deposits');

Route::get('/dashb_funds_tranfer', [App\Http\Controllers\Userdashcontroller::class, 'dashb_funds_tranfer'])->name('dashb_funds_tranfer');

Route::post('/dashb_funds_tranfer_save', [App\Http\Controllers\Userdashcontroller::class, 'dashb_funds_tranfer_save'])->name('dashb_funds_tranfer_save');


Route::get('/dashb_package_get_list', [App\Http\Controllers\Userdashcontroller::class, 'dashb_package_get_list'])->name('dashb_package_get_list');

Route::get('/plan_specific/{plan}', [App\Http\Controllers\Userdashcontroller::class, 'plan_specific'])->name('plan_specific');

Route::get('/dashb_plans_history', [App\Http\Controllers\Userdashcontroller::class, 'dashb_plans_history'])->name('dashb_plans_history');

Route::get('/dashb_plans_profit_expected', [App\Http\Controllers\Userdashcontroller::class, 'dashb_plans_profit_expected'])->name('dashb_plans_profit_expected');

Route::get('/dashb_plans_running', [App\Http\Controllers\Userdashcontroller::class, 'dashb_plans_running'])->name('dashb_plans_running');

Route::post('/dashb_plans', [App\Http\Controllers\Userdashcontroller::class, 'dashb_plans'])->name('dashb_plans');


Route::get('/dashb_profile', [App\Http\Controllers\Userdashcontroller::class, 'dashb_profile'])->name('dashb_profile');

Route::post('/dashb_profile_save', [App\Http\Controllers\Userdashcontroller::class, 'dashb_profile_save'])->name('dashb_profile_save');

Route::get('/dashb_referrals_active', [App\Http\Controllers\Userdashcontroller::class, 'dashb_referrals_active'])->name('dashb_referrals_active');

Route::get('/dashb_referrals_inactive', [App\Http\Controllers\Userdashcontroller::class, 'dashb_referrals_inactive'])->name('dashb_referrals_inactive');

Route::get('/dashb_referrals_view', [App\Http\Controllers\Userdashcontroller::class, 'dashb_referrals_view'])->name('dashb_referrals_view');

Route::get('/dashb_withdrawals_completed', [App\Http\Controllers\Userdashcontroller::class, 'dashb_withdrawals_completed'])->name('dashb_withdrawals_completed');

Route::get('/dashb_withdrawals_history', [App\Http\Controllers\Userdashcontroller::class, 'dashb_withdrawals_history'])->name('dashb_withdrawals_history');

Route::get('/dashb_withdrawals_pending', [App\Http\Controllers\Userdashcontroller::class, 'dashb_withdrawals_pending'])->name('dashb_withdrawals_pending');

Route::get('/dashb_withdrawals', [App\Http\Controllers\Userdashcontroller::class, 'dashb_withdrawals'])->name('dashb_withdrawals');


// franks routes

// depositsubmit

Route::post('/dashb_depositsubmit', [App\Http\Controllers\Userdashcontroller::class, 'dashb_depositsubmit'])->name('dashb_depositsubmit');


Route::post('/userdashb_deposit_request', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_deposit_request'])->name('userdashb_deposit_request');



Route::get('/dashb_deposits_pending', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits_pending'])->name('dashb_deposits_pending');

Route::get('/dashb_deposits_completed', [App\Http\Controllers\Userdashcontroller::class, 'dashb_deposits_completed'])->name('dashb_deposits_completed');

//user dashboard starts
Route::get('/userdashb', [App\Http\Controllers\Userdashcontroller::class, 'userdashb'])->name('userdashb');
Route::get('/userdash_pending_deposit', [App\Http\Controllers\Userdashcontroller::class, 'userdash_pending_deposit'])->name('userdash_pending_deposit');
Route::get('/userdash_approved_deposit', [App\Http\Controllers\Userdashcontroller::class, 'userdash_approved_deposit'])->name('userdash_approved_deposit');
Route::get('/userdash_pedinging_withdrawal', [App\Http\Controllers\Userdashcontroller::class, 'userdash_pedinging_withdrawal'])->name('userdash_pedinging_withdrawal');
Route::get('/userdashb_approved_withdrawal', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_approved_withdrawal'])->name('userdashb_approved_withdrawal');

Route::get('/userdashb_investment_plans', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_investment_plans'])->name('userdashb_investment_plans');
Route::get('/userdashb_current_investment', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_current_investment'])->name('userdashb_current_investment');
Route::get('/userdashb_expected_profit', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_expected_profit'])->name('userdashb_expected_profit');
Route::get('/userdashb_investment_history', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_investment_history'])->name('userdashb_investment_history');


Route::get('/userdashb_referrals', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_referrals'])->name('userdashb_referrals');
Route::get('/userdashb_active_referrals', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_active_referrals'])->name('userdashb_active_referrals');
Route::get('/userdashb_inactive_referrals', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_inactive_referrals'])->name('userdashb_inactive_referrals');



Route::get('/userdashb_account_summary', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_account_summary'])->name('userdashb_account_summary');


Route::get('/userdashb_top_earners', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_top_earners'])->name('userdashb_top_earners');



Route::get('/userdashb_deposit', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_deposit'])->name('userdashb_deposit');
Route::get('/userdashb_withdrawal', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_withdrawal'])->name('userdashb_withdrawal');


Route::get('/userdashb_profile', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_profile'])->name('userdashb_profile');
Route::get('/userdashb_wallet_address', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_wallet_address'])->name('userdashb_wallet_address');
Route::get('/userdashb_message', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_message'])->name('userdashb_message');
Route::get('/userdashb_notification', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_notification'])->name('userdashb_notification');

//plan processing
Route::post('/userdashb_plan', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_plan'])->name('userdashb_plan');

Route::post('/userdashb_withdrawal_post', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_withdrawal_post'])->name('userdashb_withdrawal_post');

//profile
Route::post('/userdashb_personal_detail', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_personal_detail'])->name('userdashb_personal_detail');

Route::post('/userdashb_personal_address', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_personal_address'])->name('userdashb_personal_address');

Route::post('/userdashb_social_media', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_social_media'])->name('userdashb_social_media');

Route::get ('/userdashb_message_detail', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_message_detail'])->name('userdashb_message_detail');

Route::get ('/userdashb_notification', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_notification'])->name('userdashb_notification');

Route::get ('/userdashb_notification_detail', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_notification_detail'])->name('userdashb_notification_detail');

Route::get ('/userdashb_password_reset', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_password_reset'])->name('userdashb_password_reset');

Route::get ('/userdashb_password_reset_save', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_password_reset_save'])->name('userdashb_password_reset_save');

Route::post ('/userdashb_deposit_request', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_deposit_request'])->name('userdashb_deposit_request');

//profile pic upload
Route::post ('/userdashb_profile_pic', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_profile_pic'])->name('userdashb_profile_pic');

Route::get ('/userdashb_charts', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_charts'])->name('userdashb_charts');

Route::get ('/userdashb_map', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_map'])->name('userdashb_map');

//funds transfer
Route::get ('/userdashb_tranfer', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_tranfer'])->name('userdashb_tranfer');
Route::post ('/userdashb_tranfer', [App\Http\Controllers\Userdashcontroller::class, 'userdashb_tranfer_post'])->name('userdashb_tranfer_post');

//specific investment packages
Route::get ('/stockplan', [App\Http\Controllers\Userdashcontroller::class, 'stockplan'])->name('stockplan');
Route::get ('/forexplan', [App\Http\Controllers\Userdashcontroller::class, 'forexplan'])->name('forexplan');

Route::get ('/realestateinvplan', [App\Http\Controllers\Userdashcontroller::class, 'realestateinvplan'])->name('realestateinvplan');
Route::get ('/cryptoplan', [App\Http\Controllers\Userdashcontroller::class, 'cryptoplan'])->name('cryptoplan');




//visitors routes


Route::get('/about', [App\Http\Controllers\VisitorController::class, 'about'])->name('about');
Route::get('/blog', [App\Http\Controllers\VisitorController::class, 'blog'])->name('blog');
Route::get('/services', [App\Http\Controllers\VisitorController::class, 'service'])->name('services');
Route::get('/health', [App\Http\Controllers\VisitorController::class, 'health'])->name('health');
Route::get('/contact', [App\Http\Controllers\VisitorController::class, 'contact'])->name('contact');
Route::get('/faq', [App\Http\Controllers\VisitorController::class, 'faq'])->name('faq');
Route::get('/index', [App\Http\Controllers\VisitorController::class, 'index'])->name('index');
Route::get('/invest', [App\Http\Controllers\VisitorController::class, 'invest'])->name('invest');
Route::get('/testimony', [App\Http\Controllers\VisitorController::class, 'testimony'])->name('testimony');
Route::get('/', [App\Http\Controllers\VisitorController::class, 'index'])->name('index');
Route::post('/postcontact', [App\Http\Controllers\VisitorController::class, 'postcontact'])->name('postcontact');

Route::get('/about', [App\Http\Controllers\VisitorController::class, 'about'])->name('about');
Route::get('/blog', [App\Http\Controllers\VisitorController::class, 'blog'])->name('blog');
Route::get('/contact', [App\Http\Controllers\VisitorController::class, 'contact'])->name('contact');
Route::get('/faq', [App\Http\Controllers\VisitorController::class, 'faq'])->name('faq');
Route::get('/ict', [App\Http\Controllers\VisitorController::class, 'ict'])->name('ict');
Route::get('/index', [App\Http\Controllers\VisitorController::class, 'index'])->name('index');
Route::get('/invest', [App\Http\Controllers\VisitorController::class, 'invest'])->name('invest');
Route::get('/terms', [App\Http\Controllers\VisitorController::class, 'terms'])->name('terms');
Route::get('/testimony', [App\Http\Controllers\VisitorController::class, 'testimony'])->name('testimony');
Route::get('/financialservices', [App\Http\Controllers\VisitorController::class, 'financialservices'])->name('financialservices');
Route::get('/realestate', [App\Http\Controllers\VisitorController::class, 'realestate'])->name('realestate');
Route::get('/crypto', [App\Http\Controllers\VisitorController::class, 'crypto'])->name('crypto');