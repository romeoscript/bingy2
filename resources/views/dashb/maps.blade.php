@extends('dashb.dashlayout')
@section('dashbody')
<section class="content-header">
    <h1>
      Maps
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Location</a></li>
      <li class="breadcrumb-item active">Map</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="row">
        <div class="col-12">
          <!-- interactive chart -->
          <div class="box">
            <div class="box-header with-border">
              <i class="fa fa-line-chart"></i>

              <h3 class="box-title">company location map</h3>

              <div class="box-tools pull-right">
                Real time Interactive Map
                <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" class="btn btn-default bg-green btn-sm active" data-toggle="on">On</button>
                  <button type="button" class="btn btn-default bg-red btn-sm" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div class="box-body">
              <div id="interactive" style="height: 100%;">
                <!-- map Widget BEGIN -->
                <div class="mapouter"><div class="gmap_canvas"><iframe width="836" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=nanocodes%20programming&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.zipcodewiki.net"></a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:836px;}</style><a href="https://www.embedgooglemap.net">embed custom google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:836px;}</style></div></div>
  <!-- map Widget END -->
              </div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

        </div>
        <!-- /.col -->
      </div>
    <!-- /.row -->
    <!-- /.row -->
  </section>

  @endsection()
