@extends('dashb.dashlayout')
@section('dashbody')
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
         Transactions
        </h1>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="breadcrumb-item"><a href="#">Withdrawals</a></li>
          <li class="breadcrumb-item active">Approved Withdrawals</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-12">
              <!-- Default box -->
                <div class="box box-solid bg-dark">
                  <div class="box-header with-border">
                    <h3 class="box-title">Approved Withdrawals</h3>

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
                          <table class="table table-striped table-bordered no-margin">
                            <thead>
                              <tr>
                                 <th class="text-center">S/N</th>
                                 <th>Name</th>
                                 <th class="text-right">Request Date</th>
                                 <th class="text-right">Amount</th>
                                 <th class="text-right">Withdrawal method</th>
                                 <th class="text-right">Method Account</th>
                                 <th class="text-right">Status</th>
                              </tr>
                             </thead>
                             <tbody>
                                 @if ($user_approved_withdrawal->count()>0)
                                 @foreach ( $user_approved_withdrawal as $withdrawal)
                                 <tr>
                                    <td class="text-center">{{$loop->index + 1}}</td>
                                    <td><a href="#" class="text-yellow hover-warning">{{Auth::user()->name }}</a></td>
                                    <td class="text-right"> {{Carbon\Carbon::parse($withdrawal->withdrawaltdate)->diffForHumans()}}</td>
                                    <td class="text-right"><span>$</span> {{$withdrawal->amount}}</td>
                                    <td class="text-right"> {{$withdrawal->method}}</td>
                                    <td class="text-right"> {{$withdrawal->methodaccount}}</td>

                                    <td class="text-right"><span class="label label-primary">Approved withdrawal</span></td>
                                 </tr>
                                 @endforeach

                                 @else

                                <tr>
                                 <td class="text-center" colspan="7">you have no Approved withdrawal</td>

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

@endsection()
