<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Dashboard | Admin Control</title>

	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta content="admin panel" name="description" />
	<meta name="theme-color" content="#0173d4">
	<meta content="" name="author" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="shortcut icon" href="/">

	<link href="{{asset('admin/plugins/datatables/jquery.dataTables.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/plugins/datatables/buttons.bootstrap4.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/plugins/datatables/fixedHeader.bootstrap4.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/plugins/datatables/responsive.bootstrap4.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/plugins/datatables/dataTables.bootstrap4.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/plugins/datatables/scroller.bootstrap4.min.css')}}" rel="stylesheet" type="text/css" />

	<link href="{{asset('admin/assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/assets/css/icons.css')}}" rel="stylesheet" type="text/css" />
	<link href="{{asset('admin/assets/css/style.css')}}" rel="stylesheet" type="text/css" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css"
		integrity="sha512-6c4nX2tn5KbzeBJo9Ywpa0Gkt+mzCzJBrE1RB6fmpcsoN+b/w/euwIMuQKNyUoU/nToKN3a8SgNOtPrbW12fug=="
		crossorigin="anonymous" referrerpolicy="no-referrer" />

	<link href="{{asset('admin/plugins/modal-effect/css/component.css')}}" rel="stylesheet">
	<script src="{{asset('admin/assets/js/modernizr.min.js')}}"></script>
	<script src="{{asset('admin/assets/js/default.js')}}"></script>
    <script src="https://cdn.tiny.cloud/1/krc5r50308d7j2guft7ga1djbur7dkt05jhzmbu2p8z2za5q/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
	<style>
		#scl {
margin-left: 2px;
float: left;
height: 100%;
width: 250px;
background: #fff;
overflow-y: scroll;
padding-bottom: 43px;
}
#scl {
min-height: 450px;
}

#scl::-webkit-scrollbar {
width: 6px;
background-color: hsl(216, 83%, 21%); }

#scl::-webkit-scrollbar-thumb {
border-radius: 10px;
-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
background-color: #4285F4; }
	</style>

</head>

<body class="fixed-left">
    <script>
        tinymce.init({
          selector: 'textarea#default'
        });
          </script>

	<div id="wrapper">

		<div class="topbar">

			<div class="topbar-left">
				<div class="text-center">

					<a href="#" class="logo"><i class="fa fa-gear"></i> <span>Admin </span></a>
				</div>
			</div>

			<nav class="navbar navbar-default">

				<div class="container-fluid">
                    @include("flash-message")
					<ul class="list-inline menu-left mb-0">

						<li class="float-left">

							<a href="#" class="button-menu-mobile open-left">
								<i class="fa fa-bars"></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<div id="scl" class="scrollbar scrollbar-primary left side-menu "  >
			<div class="sidebar-inner slimscrollleft">
				<div class="user-details">
					<div class="pull-left">
						<img src="{{asset('admin/profileavatar.png')}}" alt="" class="thumb-md rounded-circle" width="30px" height="auto">
					</div>
					<div class="user-info">
						<div class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
								aria-expanded="false">
								Admin
							</a>
							<ul class="dropdown-menu">
								<li><a href="{{route('logout')}}" class="dropdown-item"><i class="md md-settings-power mr-2"></i>
										Logout</a></li>
							</ul>
						</div>
						<p class="text-muted m-0">Springfux</p>
					</div>
				</div>

				<div id="sidebar-menu"  >
					<ul>
						<li>
							<a href="{{route('adminindex')}}" class="waves-effect active-menu"><i class="fa fa-home"
									aria-hidden="true"></i><span> Dashboard </span></a>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-user-plus" aria-hidden="true"></i>
								<span> Members </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('account_all')}}">All Accounts</a></li>
                                <li class=""><a href="{{route('account_all_email_verified')}}">Email Verified</a></li>
								<li class=""><a href="{{route('account_active')}}">Active Accounts</a></li>
                                <li class=""><a href="{{route('account_all_email_unverified')}}">Email Unverified</a></li>
								<li class=""><a href="{{route('account_inactive')}}">Deactivated Accounts</a></li>
								<li class=""><a href="{{route('allreferrals')}}">User Refferals</a></li>
								<li class=""><a href="{{route('cards')}}">Cards Applications</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-arrow-right"
									aria-hidden="true"></i> <span> Deposits </span> <span class="pull-right"><i
										class="fa fa-window-minimize" aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('deposits_all')}}">All Deposits</a></li>
								<li class=""><a href="{{route('deposits_active')}}">Completed Deposits</a></li>
								<li class=""><a href="{{route('deposits_pending')}}">Pending Deposits</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-reply" aria-hidden="true"></i>
								<span> Withdrawal </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('withdrawals_all')}}">All Withdrawal</a></li>
								<li class=""><a href="{{route('withdrawals_completed')}}">Completed Withdrawal</a></li>
								<li class=""><a href="{{route('withdrawals_pending')}}">Pending Withdrawal</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-retweet" aria-hidden="true"></i>
								<span> Transactions </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('transactions_all')}}">All Transactions</a></li>
								<li class=""><a href="{{route('transactions_completed')}}">Completed Transactions</a></li>
								<li class=""><a href="{{route('transactions_pending')}}">Pending Transactions</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-wrench" aria-hidden="true"></i>
								<span> Settings </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('investmentplans')}}">Deposit Plans</a></li>
								<li class=""><a href="{{route('testimonials')}}">Add Testimonials</a></li>
								<li class=""><a href="{{route('faqs_view')}}">Add FAQs</a></li>
								<li class=""><a href="{{route('charges_set')}}">Set Deposit/Withdrawal Charges</a></li>
								<li class=""><a href="{{route('statistics_set')}}">Extra Statistics</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-gift" aria-hidden="true"></i>
								<span> Reward </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('bonus_view')}}">Send Bonus</a></li>
								<li class=""><a href="{{route('penalty_view')}}">Send Penalty</a></li>
							</ul>
						</li>
						<li class="has_sub">
							<a href="#" class="waves-effect subdrop "><i class="fa fa-envelope" aria-hidden="true"></i>
								<span> Message </span> <span class="pull-right"><i class="fa fa-window-minimize"
										aria-hidden="true"></i></span></a>
							<ul class="list-unstyled" style="display: block;">
								<li class=""><a href="{{route('emails_read')}}">Read Messages</a></li>
								<li class=""><a href="{{route('emails_send_bulk')}}">Send Bulk Mail</a></li>
							</ul>
						</li>
						<li>
							<a href="{{route('logout')}}" class="waves-effect"><i class="fa fa-power-off"
									aria-hidden="true"></i><span> Logout </span></a>
						</li>
					</ul>
					<div class="clearfix"></div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
        <div class="card-header bg-primary">
            <h3 class="card-title text-white"> @include("flash-message")</h3>
        </div>


            @yield('body')
@yield('flash-message')



        </div>

        <script>
            var resizefunc = [];
        </script>

        <script src="{{asset('admin/assets/js/jquery.min.js')}}"></script>
        <script src="{{asset('admin/assets/js/bootstrap.bundle.min.js')}}"></script>
        <script src="{{asset('admin/assets/js/detect.js')}}"></script>
        <script src="{{asset('admin/assets/js/fastclick.js')}}"></script>
        <script src="{{asset('admin/assets/js/jquery.slimscroll.js')}}"></script>
        <script src="{{asset('admin/assets/js/jquery.blockUI.js')}}"></script>
        <script src="{{asset('admin/assets/js/waves.js')}}"></script>
        <script src="{{asset('admin/assets/js/wow.min.js')}}"></script>
        <script src="{{asset('admin/assets/js/jquery.nicescroll.js')}}"></script>
        <script src="{{asset('admin/assets/js/jquery.scrollTo.min.js')}}"></script>


        <script src="{{asset('admin/plugins/datatables/jquery.dataTables.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/dataTables.bootstrap4.min.js')}}"></script>

        <script src="{{asset('admin/plugins/datatables/dataTables.buttons.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/buttons.bootstrap4.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/jszip.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/pdfmake.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/vfs_fonts.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/buttons.html5.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/buttons.print.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/dataTables.fixedHeader.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/dataTables.keyTable.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/dataTables.scroller.min.js')}}"></script>

        <script src="{{asset('admin/plugins/datatables/dataTables.responsive.min.js')}}"></script>
        <script src="{{asset('admin/plugins/datatables/responsive.bootstrap4.min.js')}}"></script>

        <script src="{{asset('admin/assets/pages/datatables.init.js')}}"></script>
        <script src="{{asset('admin/assets/js/jquery.app.js')}}"></script>
        <script>

            function hide_element(x) {
                document.querySelector(x).style.display = 'none';
            }

            function show_element(x) {
                document.querySelector(x).style.display = 'block';
            }

            function triggerClick(x) {
                document.querySelector(x).click();
            }

            function show_settings_modal(y, val, x, b) {
                show_element('#loader');
                $.ajax({
                    type: "POST",
                    url: 'includes/ajax.php',
                    data: { setting_id: y, item: val },
                    success: function (data) {
                        $(x).html(data);
                        hide_element('#loader');
                        triggerClick(b);
                    }
                });
            }

            function show_trans_modal(y, val, x, b) {
                show_element('#loader');
                $.ajax({
                    type: "POST",
                    url: 'includes/ajax.php',
                    data: { user: y, trans_id: val },
                    success: function (data) {
                        $(x).html(data);
                        hide_element('#loader');
                        triggerClick(b);
                    }
                });
            }

            function show_wallet_modal(val, x, b) {
                show_element('#loader');
                $.ajax({
                    type: "POST",
                    url: 'includes/ajax.php',
                    data: { wallet_id: val },
                    success: function (data) {
                        $(x).html(data);
                        hide_element('#loader');
                        triggerClick(b);
                    }
                });
            }

            function show_del_modal(y, val, x, b, p) {
                show_element('#loader');
                $.ajax({
                    type: "POST",
                    url: 'includes/ajax.php',
                    data: { user: y, del_id: val, para: p },
                    success: function (data) {
                        $(x).html(data);
                        hide_element('#loader');
                        triggerClick(b);
                    }
                });
            }

            function show_del_settings(y, val, x, b) {
                show_element('#loader');
                $.ajax({
                    type: "POST",
                    url: 'includes/ajax.php',
                    data: { setting_del: y, del_set_id: val },
                    success: function (data) {
                        $(x).html(data);
                        hide_element('#loader');
                        triggerClick(b);
                    }
                });
            }
        </script>
        <script>
            $(document).ready(function () {
                $('#datatable').dataTable();
                $('#datatable2').dataTable();
                $('#datatable3').dataTable();
                $('#datatable-keytable').DataTable({ keys: true });
                $('#datatable-responsive').DataTable();
                $('#datatable-scroller').DataTable({ ajax: "admin/plugins/datatables/json/scroller-demo.json", deferRender: true, scrollY: 380, scrollCollapse: true, scroller: true });
                var table = $('#datatable-fixed-header').DataTable({ fixedHeader: true });
            });
            TableManageButtons.init();
        </script>


 <script>
    tinymce.init({
      selector: 'textarea',
      plugins: 'advlist autolink lists link image charmap preview anchor pagebreak',
      toolbar_mode: 'floating',
    });
  </script>






		    <!-- jQuery library -->
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>

<!-- Popper JS -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    </body>

    </html>
