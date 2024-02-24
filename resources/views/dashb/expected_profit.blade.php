@extends('dashb.dashlayout')
@section('dashbody')







<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
      Expected Profit
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Profit</a></li>
      <li class="breadcrumb-item active">Expected Profit</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-12">
          <!-- Default box -->
            <div class="box box-solid bg-dark">
              <div class="box-header with-border">
                <h3 class="box-title">All Expected Profit</h3>

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
                             <th>Package Name</th>
                             <th class="text-right">Invested Date</th>
                             <th class="text-right">Invested Amount</th>
                             <th class="text-right">Maturity Date</th>
                             <th class="text-right">Profit</th>
                             <th class="text-right">Total Profit</th>

                          </tr>
                         </thead>
                         <tbody>
                             @if ($expected_profit->count()>0)

                             @php
                                $sum_profit = 0;
                                $sum_profit_total = 0;
                             @endphp
                                 @foreach ($expected_profit as $profit)

                                 <tr>
                                    <td class="text-center">{{$loop->index + 1}}</td>
                                    <td><a href="#" class="text-yellow hover-warning">{{$profit->investmentplan}}</a></td>
                                    <td class="text-right"><span></span>{{Carbon\Carbon::parse($profit->investmentdate)->diffForHumans()}}</td>
                                    <td class="text-right"><span>$</span> {{$profit->investmentamount}}</td>
                                    <td class="text-right"><span class="label label-success">{{Carbon\Carbon::parse($profit->investmentmaturitydate)->diffForHumans()}}</span></td>
                                    <td class="text-right"><span>$</span>{{$profit->investmentprofit}}</td>
                                    <td class="text-right"><span>$</span>{{$profit->investmenttotalprofit}}</td>

                                 </tr>
                                 @php
                                   $sum_profit += $profit->investmentprofit ;
                                   $sum_profit_total +=  $profit->investmenttotalprofit;
                                 @endphp
                                 @endforeach
                                 <tr>
                                    <td class="text-center" colspan="2">Total Profit = {{$sum_profit}}</td>

                                    <td class="text-right" colspan="3"><span>$</span> Total Amount ={{$sum_profit_total}}</td>

                                 </tr>

                             @else

                             <tr>
                                <td class="text-center" colspan="7">You have no investment currently running</td>
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
    </div>
  </section>






@endsection()
