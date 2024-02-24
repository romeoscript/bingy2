@extends('dashb.dashlayout')
@section('dashbody')
 <!-- Content Header (Page header) -->
 <section class="content-header">
    <h1>
     Referrals
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Referrals</a></li>
      <li class="breadcrumb-item active">All Referrals</li>
    </ol>
  </section>

      <div class="col-12">
          <!-- Default box -->
            <div class="box box-solid bg-black">
              <div class="box-header with-border">
                <h3 class="box-title">All Referrals</h3>

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
                        <thead>
                          <tr>
                              <th>SN</th>
                            <th>Name</th>
                            <th>Registration date</th>
                           <th>Email address</th>
                          </tr>
                        </thead>
                        <tbody>
                        @if ($all_ref->count()>0)
                                @foreach ($all_ref as $ref)
                                <tr>
                                    <td>
                                      <a href="#" class="text-yellow hover-warning">
                                        {{$loop->index + 1}}
                                      </a>

                                    </td>
                                    <td>{{$all_ref->name}}</td>

                                    <td>{{$all_ref->email}}</td>

                                  </tr>
                                @endforeach
                            @else

                            <tr>
                                <td colspan="4">
                                    <h5 class="text-yellow hover-warning"> You have no referral, please share yout referral link to family and friends to earn referral bonus</h5>
                                </td>
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
@endsection()
