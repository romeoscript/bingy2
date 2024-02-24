@extends('dashblayout.dashlayout')
@section('body')



<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
      my Investments
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item active">Current Investments</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-12">
          <!-- Default box -->
            <div class="box box-solid bg-dark">
              <div class="box-header with-border">
                <h3 class="box-title">My Current Running Invesments</h3>

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
                             <th>Plan</th>
                             <th class="text-right">Invested Date</th>
                             <th class="text-right">Amount</th>
                             <th class="text-right">Maturity Date</th>
                             <th class="text-right">Profit</th>
                             <th class="text-right">Status</th>
                          </tr>
                         </thead>
                         <tbody>
                             @if ($my_current_investments->count() >0)
                             @foreach ($my_current_investments as $my_investment)
                             <tr>
                                <td class="text-center">{{$loop->index + 1}}</td>
                                <td><a href="#" class="text-yellow hover-warning">{{$my_investment->investmentplan}}</a></td>
                                <td class="text-right"><span></span> {{Carbon\Carbon::parse($my_investment->investmentdate)->diffForHumans() }}</td>
                                <td class="text-right"><span>$</span> {{$my_investment->investmentamount}}</td>
                                <td class="text-right"><span></span>{{Carbon\Carbon::parse($my_investment->investmentmaturitydate)->diffForHumans() }}</td>
                                <td class="text-right"><span>$</span> {{$my_investment->investmentprofit}}</td>
                                <td class="text-right"><span class="label label-success">Still Running</span></td>
                             </tr>

                             @endforeach

                             @else
                             <tr>
                                <td class="text-center"></td>
                                <td colspan="5" class="text-center"><a href="#" class="text-yellow hover-warning">You have no current running Investment</a></td>

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

@endsection
