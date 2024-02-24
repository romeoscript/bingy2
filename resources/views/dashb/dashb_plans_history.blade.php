@extends('dashblayout.dashlayout')
@section('body')






<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
      all My Investments
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">investment</a></li>
      <li class="breadcrumb-item active">All investments</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
      <div class="col-12">
          <!-- Default box -->
            <div class="box box-solid bg-dark">
              <div class="box-header with-border">
                <h3 class="box-title">List of all Investments</h3>

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
                             <th>Plan Name</th>
                             <th class="text-right">Amount</th>
                             <th class="text-right">Invested Date</th>
                             <th class="text-right">Mature Date</th>
                             <th class="text-right">Status</th>
                          </tr>
                         </thead>
                         <tbody>
                             @if ($all_investment->count() > 0)
                             @foreach ($all_investment as $investment)


                          <tr><td class="text-center">{{$loop->index + 1}}</td>
                             <td><a href="#" class="text-yellow hover-warning">{{$investment->investmentplan}}</a></td>
                             <td class="text-right"><span>$</span>{{$investment->amount}}</td>
                             <td class="text-right"> {{$investment->investmentdate}}</td>
                             <td class="text-right">{{$investment->investmentmaturitydate}}</td>
                             <td class="text-right"> {{$investment->investmentStatus == 0? 'CURRENTLY RUNNING': 'EXPIRED'}}</td>
                          </tr>
                             @endforeach



                             @else
<tr>
    <td class="text-center">No Investment History Found</td>
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
