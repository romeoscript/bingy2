@extends('dashblayout.dashlayout')
@section('body')

    <style>
        .faa {
            font-size: 40px;
            color: blue;
        }

    </style>


    <div class="row">
        <div class="row">
            <div class="col-md-7  stretch-card">
                <div class="card">
                    <div class="card-header header-sm d-flex justify-content-between align-items-center">
                        <h4 class="card-title">Account Summary</h4>
                        <a class="btn btn-inverse-primary btn-sm" href="{{route('dashb_withdrawals_history')}}"><i class="fa fa-file-text"></i>
                            Withdrawal Records</a>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class=" align-items-center">
                                <p style="margin-bottom: 0.5rem;" class="text-muted">Available Balance</p>
                                <h1 class="font-weight-medium mb-0">${{ $funds->balance }}</h1>
                            </div>
                        </div>
                        <div class="d-flex flex-row mt-4 mb-4">
                            <div class="wrapper">
                                <p class="mb-0 text-muted">Book Balance</p>
                                <div class="d-flex align-items-center">
                                    <h5 class="font-weight-medium mb-0">${{ $funds->totalbalance + $funds->totalprofit}}</h5>

                                </div>
                            </div>
                            <div class="wrapper ml-4 border-left pl-4">
                                <p class="mb-0 text-muted">Live Profit</p>
                                <div class="d-flex align-items-center">
                                    <h5 class="font-weight-medium mb-0">${{$funds->totalprofit}}</h5>
                                    <!--div class="badge badge-success ml-2 badge-sm">NAN%</div-->
                                </div>
                            </div>
                        </div>

                        <div class="d-flex flex-row mb-3">

                            <a href="{{route('dashb_deposits')}}" class="btn btn-outline-success mr-1"><i class="fa fa-upload"></i>
                                Deposit</a>
                            <a href="{{route('dashb_withdrawals')}}" class="btn btn-outline-warning mr-1"><i class="fa fa-download"></i>
                                Withdraw</a>
                            <a href="{{route('dashb_funds_tranfer')}}" class="btn btn-outline-primary d-none d-md-block"><i
                                    class="fa fa-exchange"></i> Transfer</a>
                        </div>
                        <div class="d-flex flex-row">
                            <p><small class="text-muted mt-5">Your Available balance is the real balance you can withdraw
                                    from while your book balance is your potential balance that will become available when
                                    your deposit plan is completed.</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-5 stretch-card">
                <div class="card text-center">
                    <div class="card-body d-flex flex-column px-2">
                        <div class="wrapper">
                            <h5>Invite Your Friends</h5>
                            <p><small class="text-muted ">Earn more when you refer your friends to invest with us. The
                                    reward on our referral program is dependent on the deposit plans.</small></p>
                            <!--form class="forms-sample mt-3" action="ref.html" method="post">
                    <div class="form-group">
                      <input type="email" class="form-control" name='email' placeholder="Your Friend's Email Address"> </div>
                      <button type="submit" name='invite_email' class="btn btn-warning btn-block"><i class='fa fa-envelope'></i> Invite Via Email</button>
                  </form-->

                            <div class="row">
                                <div class="col-6 col-md-12">
                                    <form class="forms-sample mt-2" action='ref.html' method="post">
                                        <a href="mailto:?subject=Invitation&body=Hello+dear%2C+I+am+happy+to+invite+you+to+join+huloex+%2C+a+reliable+investment+website+that+helps+you+to+trade+and+return+your+profit.+Use+my+link+to+register+{{route('register')}}%3Frefid%3D{{Auth::user()->id}}"
                                            class="btn btn-warning btn-block"><i class='fa fa-envelope'></i> Email</a>
                                    </form>
                                </div>

                                <div class="col-6 col-md-12">
                                    <form class="forms-sample mt-2" action='ref.html' method="post">
                                        <a href="https://facebook.com/sharer/sharer.html?u={{route('register')}}%3Frefid%3D{{Auth::user()->id}}"
                                            class="btn btn-primary btn-block"><i class='fa fa-facebook'></i> Facebook</a>
                                    </form>
                                </div>

                                <div class="col-6 col-md-12">
                                    <form class="forms-sample mt-2" action='ref.html' method="post">
                                        <a href="https://wa.me/?text=Hello+dear%2C+I+am+happy+to+invite+you+to+join+huloex+%2C+a+reliable+investment+website+that+helps+you+to+trade+and+return+your+profit.+Use+my+link+to+register+{{route('register')}}%3Frefid%3D{{Auth::user()->id}}"
                                            class="btn btn-success btn-block"><i class='fa fa-whatsapp'></i> Whatsapp</a>
                                    </form>
                                </div>

                                <div class="col-6 col-md-12">
                                    <form class="forms-sample mt-2" action='ref.html' method="post">
                                        <a href="https://t.me/share/?text=Hello+dear%2C+I+am+happy+to+invite+you+to+join+huloex+%2C+a+reliable+investment+website+that+helps+you+to+trade+and+return+your+profit.+Use+my+link+to+register+{{route('register')}}%3Frefid%3D{{Auth::user()->id}}"
                                            class="btn btn-outline-primary btn-block"><i class='fa fa-paper-plane'></i>
                                            Telegram</a>
                                    </form>
                                </div>
                            </div>

                            <form class="forms-sample mt-3">
                                <div class="form-group">
                                    <input type="text" readonly id='ref_cop' class="form-control text-dark"
                                        value="{{route('register')}}?refid={{Auth::user()->id}}">
                                </div>
                                <button id='ref_btn' type="button" onclick="copy_ref('ref_cop','#ref_btn');"
                                    class="btn btn-primary btn-block"><i class='fa fa-copy'></i> Copy Referral Link</button>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
      

        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                <i class="fa faa fa-university" aria-hidden="true"></i>
                                {{-- <svg class="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg> --}}
                            </div>
                            <div class="d-sm-none">
                                <h2 class="h5">Total Balance</h2>
                                <h3 class="fw-extrabold mb-1">{{ $funds->totalbalance }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0">Total Balance</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->totalbalance }}</h3>
                            </div>
                            <small class="d-flex align-items-center text-gray-500">


                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                <i class="fa faa fa-university" aria-hidden="true"></i>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="h5">Available Balance</h2>
                                <h3 class="fw-extrabold mb-1">{{ $funds->balance }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0">Available Balance</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->balance }}</h3>
                            </div>
                            <small class="d-flex align-items-center text-gray-500">

                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                <i class="fa faa fa-university" aria-hidden="true"></i>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="h5">Trading Balance</h2>
                                <h3 class="fw-extrabold mb-1">{{ $funds->currentinvestment }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0">Trading Balance</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->currentinvestment }}</h3>
                            </div>
                            <small class="d-flex align-items-center text-gray-500">

                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-primary rounded me-4 me-sm-0">
                                <i class="fa faa fa-university" aria-hidden="true"></i>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="h5">Total Profit</h2>
                                <h3 class="fw-extrabold mb-1">{{ $funds->totalprofit }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0">Total Profit</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->totalprofit }}</h3>
                            </div>
                            <small class="d-flex align-items-center text-gray-500">

                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-secondary rounded me-4 me-sm-0">
                                <i class="fa faa fa-university" aria-hidden="true"></i>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="fw-extrabold h5">Bonus</h2>
                                <h3 class="mb-1">${{ $funds->bonus }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0">Bonus</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->bonus }}</h3>
                            </div>
                            <small class="d-flex align-items-center text-gray-500">

                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-4 mb-4">
            <div class="card border-0 shadow">
                <div class="card-body">
                    <div class="row d-block d-xl-flex align-items-center">
                        <div
                            class="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                            <div class="icon-shape icon-shape-tertiary rounded me-4 me-sm-0">
                                <i class="fa faa fa-handshake-o" aria-hidden="true"></i>
                            </div>
                            <div class="d-sm-none">
                                <h2 class="fw-extrabold h5">Referral Earning</h2>
                                <h3 class="mb-1">{{ $funds->refbonus }}</h3>
                            </div>
                        </div>
                        <div class="col-12 col-xl-7 px-xl-0">
                            <div class="d-none d-sm-block">
                                <h2 class="h6 text-gray-400 mb-0"> Referral Earning</h2>
                                <h3 class="fw-extrabold mb-2"><i class="fa fa-usd"
                                        aria-hidden="true"></i>{{ $funds->refbonus }}</h3>
                            </div>
                            <small class="text-gray-500">

                            </small>
                            <div class="small d-flex mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-xl-8">
            <div class="row">
                <div class="col-12 mb-4">
                    <div class="card border-0 shadow">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h2 class="fs-5 fw-bold mb-0">Recent Transactions</h2>
                                </div>
                                <div class="col text-end">
                                    <a href="#" class="btn btn-sm btn-primary">See all</a>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">

                                    <tr>
                                        <th class="border-bottom" scope="col">Date</th>
                                        <th class="border-bottom" scope="col">Amount</th>
                                        <th class="border-bottom" scope="col">Type</th>
                                        <th class="border-bottom" scope="col">More</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>


                                        @if ($withdrawals)
                                            @foreach ($withdrawals as $withdrawal)
                                                <th class="text-gray-900" scope="row">
                                                    {{ Carbon\Carbon::parse($withdrawal->withdrawaltdate)->diffForHumans() }}
                                                </th>
                                                <td class="fw-bolder text-gray-500">
                                                    {{ $withdrawal->amount }}
                                                </td>
                                                <td class="fw-bolder text-gray-500">
                                                    Withdrawal
                                                </td>
                                                <td class="fw-bolder text-gray-500">
                                                    <div class="d-flex">
                                                        <svg class="icon icon-xs text-danger me-2" fill="currentColor"
                                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                                clip-rule="evenodd"></path>
                                                        </svg>

                                                    </div>
                                                </td>
                                    </tr>
                                    @endforeach
                                    @endif

                                    @if ($user_deposits)
                                        @foreach ($user_deposits as $usr_deposits)
                                            <th class="text-gray-900" scope="row">
                                                {{ Carbon\Carbon::parse($usr_deposits->depositDate )->diffForHumans() }}
                                            </th>
                                            <td class="fw-bolder text-gray-500">
                                                {{ $usr_deposits->amount }}
                                            </td>
                                            <td class="fw-bolder text-gray-500">
                                                Deposit
                                            </td>
                                            <td class="fw-bolder text-gray-500">
                                                <div class="d-flex">
                                                    <svg class="icon icon-xs text-success me-2" fill="currentColor"
                                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                            d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                    </svg>

                                                </div>
                                            </td>
                                            </tr>
                                        @endforeach
                                    @else
                                        <tr>
                                            <td colspan="4">No Transactions found</td>
                                        </tr>
                                    @endif




                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>





    <div class="col-md-6  stretch-card">
        <div class="card">
            <div class="card-body px-2">
                <h4 class="card-title">Market</h4>
                <div class="tradingview-widget-container">
                    <div class="col-lg-12 col-md-12 wow fadeInLeft" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
                            <!-- <div class="blog-item"> -->
                                <iframe src="https://widget.coinlib.io/widget?type=full_v2&amp;theme=light&amp;cnt=6&amp;pref_coin_id=1505&amp;graph=yes" width="100%" height="536px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0"></iframe>
                            <!-- </div> -->
                            <br><br><br><br>
                        </div>
                </div>
            </div>
        </div>
    </div>





@endsection
