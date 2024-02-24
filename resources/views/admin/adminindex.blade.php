@extends("adminlayout.adminlayout")

@section("body")


<div class="content-page">

    <div class="content">
        <div class="container-fluid">

            <div class="row">
            </div>



            <div class="row">
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-primary"><i class="fa fa-users"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$users_all->count()}}</span>
                            Total Users
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">Active Users <span class="pull-right">{{$users_active->count()}}</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-success"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$deposit_all->sum('amount')}}</span>
                            Total Deposit
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-warning"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$withdrawal_all->sum('amount')}}</span>
                            Total Withdrawal
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-info"><i class="fa fa-usd" aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            $<span class="counter text-dark">{{$deposit_all->sum('amount')-$withdrawal_all->sum('amount')}}</span>
                            System Balance
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">Transaction Summary</h3>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="table-responsive">
                                        <table class="table table-striped  table-bordered nowrap"
                                            style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-primary">24 Hours</th>
                                                    <th class="text-center text-primary">7 days</th>
                                                    <th class="text-center text-primary">Last Month</th>
                                                    <th class="text-center text-primary">Year</th>
                                                    <th class="text-center text-primary">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><b>In<span style="float: right;">Out</span></b></td>
                                                    <td><b>In<span style="float: right;">Out</span></b></td>
                                                    <td><b>In<span style="float: right;">Out</span></b></td>
                                                    <td><b>In<span style="float: right;">Out</span></b></td>
                                                    <td><b>In<span style="float: right;">Out</span></b></td>
                                                </tr>
                                                <tr>
                                                    <td>${{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('yesterday'))->sum('amount')}} <span style="float: right;">$ {{$withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('yesterday'))->sum('amount')}}</span></td>
                                                    <td>$ {{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a week ago'))->sum('amount')}} <span style="float: right;">$ {{$withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a week ago'))->sum('amount')}}</span>
                                                    </td>
                                                    <td>{{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a month ago'))->sum('amount')}}<span style="float: right;">$ {{$withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a month ago'))->sum('amount')}}</span>
                                                    </td>
                                                    <td>$ {{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a year ago'))->sum('amount')}} <span style="float: right;">$ {{$withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a year ago'))->sum('amount')}}</span></td>
                                                    <td>${{$deposit_completed->sum('amount')}}<span style="float: right;">${{$withdrawal_completed->sum('amount')}}</span></td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center text-primary"><b>${{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('yesterday'))->sum('amount') -$withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('yesterday'))->sum('amount') }}</b></td>
                                                    <td class="text-center text-primary"><b>$ {{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a week ago'))->sum('amount')- $withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a week ago'))->sum('amount')}}</b>
                                                    </td>
                                                    <td class="text-center text-primary"><b>$ {{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a month ago'))->sum('amount')- $withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a month ago'))->sum('amount')}}</b>
                                                    </td>
                                                    <td class="text-center text-primary"><b>$ {{$deposit_completed->where('created_at','>', Carbon\Carbon::parse('a year ago'))->sum('amount')- $withdrawal_completed->where('created_at','>', Carbon\Carbon::parse('a year ago'))->sum('amount')}}</b></td>
                                                    <td class="text-center text-primary"><b>$ {{$deposit_completed->sum('amount')- $withdrawal_completed->sum('amount')}}</b></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div class="row">
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-success"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$deposit_completed->sum('amount')}}</span>
                            Verified Deposit
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-warning"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$deposit_pending->sum('amount')}}</span>
                            Pending Deposit
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-purple"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$withdrawal_pending->sum('amount')}}</span>
                            Pen. Withdrawal
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3">
                    <div class="mini-stat clearfix bx-shadow bg-white">
                        <span class="mini-stat-icon bg-primary"><i class="fa fa-usd"
                                aria-hidden="true"></i></span>
                        <div class="mini-stat-info text-right text-dark">
                            <span class="counter text-dark">{{$funds_all->sum('bonus')}}</span>
                            Total Bonus
                        </div>
                        <div class="tiles-progress">
                            <div class="m-t-20">
                                <h5 class="text-uppercase">BTC Value <span class="pull-right">0.0000</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">Update Company Information</h3>
                        </div>
                        <div class="card-body">
                            <form method="post" action="{{route('post_company_settings')}}">
                                @csrf
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" name="companyname"
                                                placeholder="Name" value="{{$payments? $payments->companyname :''}}">
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class="form-control" name="companylocation"
                                                placeholder="Address"
                                                value="{{$payments? $payments->companylocation :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="form-group">
                                            <label>Email Address</label>
                                            <input type="email" class="form-control" name="companyemail"
                                                placeholder="Email Address" value="{{$payments? $payments->companyemail:''}}">
                                        </div>
                                        <div class="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" class="form-control" name="companyphone"
                                                placeholder="Phone Number" value="{{$payments? $payments->companyphone :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">

                                        <div class="form-group">
                                            <label>Bitcoin</label>
                                            <input type="text" class="form-control" name="btc_address"
                                                placeholder="Bitcoin Address" value="{{$payments? $payments->btc_address :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>Ethereum</label>
                                            <input type="text" class="form-control" name="eth"
                                                placeholder="Ethereum Address"
                                                value="{{$payments? $payments->eth :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>Paypal</label>
                                            <input type="text" class="form-control" name="paypal"
                                                placeholder="Paypal Address"
                                                value="{{$payments? $payments->paypal :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>usdt</label>
                                            <input type="text" class="form-control" name="usdt"
                                                placeholder="usdt Address"
                                                value="{{$payments? $payments->usdt :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>xrp</label>
                                            <input type="text" class="form-control" name="xrp"
                                                placeholder="xrp Address"
                                                value="{{$payments? $payments->xrp :''}}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Minimum Withdrawal</label>
                                            <input type="text" required class="form-control" name="withdrawal_minimum"
                                                placeholder="Minimum Withdrawal" value="{{$payments? $payments->withdrawal_minimum :''}}">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Maximum Withdrawal</label>
                                            <input type="text" required class="form-control" name="withdrawal_maximum"
                                                placeholder="Maximum Withdrawal" value="{{$payments? $payments->withdrawal_maximum :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>Company Running days</label>
                                            <input type="text" class="form-control" name="companyrunningdays"
                                                placeholder="Company runing days" value="{{$payments? $payments->companyrunningdays :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>Company About Us Title</label>
                                            <input type="text" class="form-control" name="companyabouttitle"
                                                placeholder="Company about us title" value="{{$payments? $payments->companyabouttitle :''}}">
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="form-group">
                                            <label>Company About Us Write Up</label>
                                           {!! Form::textarea("companyabouttext", $payments? $payments->companyabouttext :'', ['class'=>'form-control','rows' => 4, 'cols' => 54,]) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button type="submit" name="site_info"
                                        class="btn btn-primary waves-effect waves-light">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">Change Login</h3>
                        </div>
                        <div class="card-body">
                            <form method="post" action="{{route('password_reset_save')}}">
                                @csrf
                                <div class="form-group">
                                    <label>Username</label>
                                    <input type="text" name="email" class="form-control"
                                        placeholder="Email" readonly value="{{Auth::user()->email}}">
                                </div>
                                <div class="form-group">
                                    <label>Current Password</label> <em class="text-warning"
                                        style="font-size: 0.8rem;"> </em>
                                    <input type="password" name="oldpassword" class="form-control"
                                        placeholder="Current Password" value="">
                                </div>
                                <div class="form-group">
                                    <label>New Password</label> <em class="text-warning"
                                        style="font-size: 0.8rem;"> </em>
                                    <input type="password" name="newpassword" class="form-control"
                                        placeholder="New Password" value="">
                                </div>
                                <div class="form-group">
                                    <label>Retype New Password</label>
                                    <input type="password" name="cnewpassword" class="form-control"
                                        placeholder="Retype New Password" value="">
                                </div>
                                <div class="text-center">
                                    <button type="submit" name="update_username_password_admin"
                                        class="btn btn-primary waves-effect waves-light">Update
                                        Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <footer class="footer text-right">
        2022 ©
    </footer>
    <script>
        function hide_hint() {
            $.ajax({
                type: "POST",
                url: 'ajax.php',
                data: 'hide_hint=' + 1,
                success: function (data) {
                    $().html(data);
                }
            });
        }
    </script>
</div>

@endsection
