@extends('dashb.dashlayout')
@section('dashbody')




<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
      Investment Plans
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Investment</a></li>
      <li class="breadcrumb-item active">Plans</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <!-- START Card With Image -->
    <h4 class="box-title mb-10">Packages</h4>
    <div class="row">

         <div class="col-md-12 col-lg-4">
          <div class="box box-default pull-up">
              <img class="card-img-top img-responsive" src="dashb/images/card/forex.jpg" alt="Card image cap">
          <a href="{{route('forexplan')}}">
            <div class="box-body text-center">

                <p><div class="col-12 col-md-12">
                  <div class="box box-body bg-hexagons-white pull-up">
                    <div class="media align-items-center p-0">
                      <div class="text-center">
                        <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                        </div>
                        <div>
                        <a href="{{route('forexplan')}}"><h3 class="no-margin text-bold">View Forex Plan</h3></a>

                        </div>
                    </div>

                  </div>
                </div>

            </div>
          </a>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>

        <div class="col-md-12 col-lg-4">
            <div class="box box-default pull-up">
                <img class="card-img-top img-responsive" src="dashb/images/card/crypto.jpg" alt="Card image cap">
            <a href="{{route('cryptoplan')}}">
              <div class="box-body text-center">

                  <p><div class="col-12 col-md-12">
                    <div class="box box-body bg-hexagons-white pull-up">
                      <div class="media align-items-center p-0">
                        <div class="text-center">
                          <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                          </div>
                          <div>
                          <a href="{{route('cryptoplan')}}"><h3 class="no-margin text-bold">View Crypto Plan</h3></a>

                          </div>
                      </div>

                    </div>
                  </div>

              </div>
            </a>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>

          <div class="col-md-12 col-lg-4">
            <div class="box box-default pull-up">
                <img class="card-img-top img-responsive" src="dashb/images/card/stock.jpg" alt="Card image cap">
            <a href="{{route('stockplan')}}">
              <div class="box-body text-center">

                  <p><div class="col-12 col-md-12">
                    <div class="box box-body bg-hexagons-white pull-up">
                      <div class="media align-items-center p-0">
                        <div class="text-center">
                          <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                          </div>
                          <div>
                          <a href="{{route('stockplan')}}"><h3 class="no-margin text-bold">View Stock Plan</h3></a>

                          </div>
                      </div>

                    </div>
                  </div>

              </div>
            </a>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>

          <div class="col-md-12 col-lg-4">
            <div class="box box-default pull-up">
                <img class="card-img-top img-responsive" src="dashb/images/card/realestate.jpg" alt="Card image cap">
            <a href="{{route('realestateplan')}}">
              <div class="box-body text-center">

                  <p><div class="col-12 col-md-12">
                    <div class="box box-body bg-hexagons-white pull-up">
                      <div class="media align-items-center p-0">
                        <div class="text-center">
                          <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                          </div>
                          <div>
                          <a href="{{route('realestateinvplan')}}"><h3 class="no-margin text-bold">View Realestate Plan</h3></a>

                          </div>
                      </div>

                    </div>
                  </div>

              </div>
            </a>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>









    </div>
    <!-- /.row -->
    <!-- END Card with image -->


  </section>





@endsection()
