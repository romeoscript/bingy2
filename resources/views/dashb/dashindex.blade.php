@extends('dashb.dashlayout')
@section('dashbody')
<style>
    .fun{
        text-align: center;
        position: absolute;
        top:60%;
        left: 40%;
    }
    .box{
        position: relative;
    }
</style>
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Account Summary
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="#">Reports</a></li>
        <li class="breadcrumb-item active">Account Summary</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
	  <div class="row">
			<div class="col-lg-3 col-md-6">
		    	<div class="box pull-up">
				  <div class="box-body">
					  <div class="media align-items-center p-0">
						<div class="text-center">
						  <a href="#" class=""><i class="fa fa-usd" style="font-size: 47px" aria-hidden="true" title="Dollar"></i></a>
						</div>
						<div>
						  <h3 class="no-margin text-bold">Total Balance</h3>
						</div>
					  </div>
					  <div class=" align-items-center mt-5 fun">
						<div>
						  <span style="text-align: center" class=" font-weight-600"> ${{$funds? $funds->totalbalance : 0.01}}</span>
						</div>

					  </div>
				</div>
				<div class="box-footer p-0 no-border">
					<div class="chart"><canvas id="chartjs1" class="h-80"></canvas></div>
				</div>
			 </div>
		  </div>
			<div class="col-lg-3 col-md-6">
		    	<div class="box pull-up">
				  <div class="box-body">
					  <div class="media align-items-center p-0">
						<div class="text-center">
						  <a href="#"><i class="fa fa-usd" style="font-size: 47px" aria-hidden="true" title="Dollar"></i></a>
						</div>
						<div>
						  <h3 class="no-margin text-bold">Trading Balance</h3>
						</div>
					  </div>
					  <div class="align-items-center mt-5 fun">
						<div>
						  <p class="no-margin font-weight-600"><span class="text-yellow">${{$funds? $funds->currentinvestment : 0.01}}</span></p>
						</div>

					  </div>
				</div>
				<div class="box-footer p-0 no-border">
					<div class="chart"><canvas id="chartjs2" class="h-80"></canvas></div>
				</div>
			 </div>
		  </div>
			<div class="col-lg-3 col-md-6">
		    	<div class="box pull-up">
				  <div class="box-body">
					  <div class="media align-items-center p-0">
						<div class="text-center">
						  <a href="#"><i class="fa fa-usd" style="font-size: 47px" aria-hidden="true" title="Dollar"></i></a>
						</div>
						<div>
						  <h3 class="no-margin text-bold">Available Balance</h3>
						</div>
					  </div>
					  <div class="align-items-center mt-5 fun">
						<div>
						  <p class=" font-weight-600"><span class="text-info">${{$funds? $funds->balance : 0.01}}</span></p>
						</div>

					  </div>
				</div>
				<div class="box-footer p-0 no-border">
					<div class="chart"><canvas id="chartjs3" class="h-80"></canvas></div>
				</div>
			 </div>
		  </div>
			<div class="col-lg-3 col-md-6">
		    	<div class="box pull-up">
				  <div class="box-body">
					  <div class="media align-items-center p-0">
						<div class="text-center">
						  <a href="#"><i class="fa fa-usd" style="font-size: 47px" aria-hidden="true" title="Dollar"></i></a>
						</div>
						<div>
						  <h3 class="no-margin text-bold">Total Profit</h3>
						</div>
					  </div>
					  <div class=" align-items-center mt-5">
						<div class="fun">
						  <p class="font-weight-600"><span class="text-success">${{$funds? $funds->totalprofit : 0.01}}</span></p>
						</div>
					  </div>
				</div>
				<div class="box-footer p-0 no-border">
					<div class="chart"><canvas id="chartjs4" class="h-80"></canvas></div>
				</div>
			 </div>
		  </div>
	   </div>
	  <div class="row">



		<div class="col-lg-6 col-12">
		  <!-- Default box -->
		  <div class="box box-solid bg-dark">
			<div class="box-header with-border">
			  <h3 class="box-title">Recent Deposits</h3>

			  <div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
						title="Collapse">
				  <i class="fa fa-minus"></i></button>
				<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
				  <i class="fa fa-times"></i></button>
			  </div>
			</div>
			<div class="box-body">
				<div class="table-responsive">
					<table class="table table-bordered no-margin">
						<tbody>
                            @if ($user_deposits->count() > 0)
                            @foreach ($user_deposits as $item)
                            <tr>
                                <td>{{$item->created_at->diffForHumans()}}</td>
                                <td>${{$item->amount}}</td>
                                <td>
                                    @if ($item->status >0)
                                    <a href='#' class='text-green hover-success'>Completed </a>
                                    @else
                                    <a href='#' class='text-yellow hover-warning'>pending</a>
                                    @endif
                                </td>
                              </tr>
                            @endforeach
                            @else
                            <tr>
                                <td colspan="2"><a href="{{route('userdashb_deposit')}}" class="text-yellow hover-warning">You have no succeful deposit click here to make a deposit</a></td>
                              </tr>
                            @endif


						</tbody>
				    </table>
				</div>
			</div>
			<!-- /.box-body -->
		  </div>
		  <!-- /.box -->

		</div>

		<div class="col-lg-6 col-12">
		  <!-- Default box -->
		  <div class="box box-solid bg-dark">
			<div class="box-header with-border">
			  <h3 class="box-title">Recent Withdrawals</h3>

			  <div class="box-tools pull-right">
				<button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
						title="Collapse">
				  <i class="fa fa-minus"></i></button>
				<button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
				  <i class="fa fa-times"></i></button>
			  </div>
			</div>
			<div class="box-body">
				<div class="table-responsive">
					<table class="table table-bordered no-margin">
						<tbody>

                            @if ($withdrawals->count() > 0)
                            @foreach ($withdrawals as $item)
                            <tr>
                                <td>{{$item->created_at->diffForHumans()}}</td>
                                <td>{{$item->amount}}</td>
                                <td>
                                    @if ($item->status >0)
                                    <a href='#' class='text-green hover-success'>Completed</a>
                                    @else
                                    <a href='#' class='text-yellow hover-warning'>pending</a>
                                    @endif
                              </tr>

                            @endforeach
                            @else
                            <tr>
                                <td colspan="2"><a href="{{route('userdashb_withdrawal')}}" class="text-yellow hover-warning">You have not made any succesful withdrawal</a></td>
                              </tr>
                            @endif
						</tbody>
				    </table>
				</div>
			</div>
			<!-- /.box-body -->
		  </div>
		  <!-- /.box -->

		</div>

	  </div>
    </section>
    <!-- /.content -->
  </div>

@endsection()

