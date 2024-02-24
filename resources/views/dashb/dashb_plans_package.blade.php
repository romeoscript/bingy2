@extends('dashblayout.dashlayout')
@section('body')



<!-- Content Header (Page header) -->
<section class="content-header">
    <h1>
      Investment Packages
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
        
      @if ($categories)

      @foreach ( $categories as $category)

      <div class="col-md-12 col-lg-4" style="height: 360px">
        <div class="box box-default pull-up">
            <img class="card-img-top img-responsive" src="images/packages/img{{$loop->index + 1}}.png" alt="Card image cap">
        <a href="{{route('plan_specific',$category)}}">
          <div class="box-body text-center">

              <p><div class="col-12 col-md-12">
                <div class="box box-body bg-hexagons-white pull-up">
                  <div class="media align-items-center p-0">
                    <div class="text-center">
                      <a href="#"><i class="cc LSK mr-5" title="OMG"></i></a>
                      </div>
                      <div>
                      <a href="{{route('plan_specific',$category)}}">
                        <h3 class="no-margin text-bold">{{$category}}</h3>
                      </a>

                      </div>
                  </div>

                </div>
              </div>
              </p>
          </div>
        
        </a>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      
        
      @endforeach
      <br>
      <br>
      <br>
      <br>
      @endif
      <br>
      <br>
      <br>
      <br>
        

        









    </div>
    <!-- /.row -->
    <!-- END Card with image -->


  </section>
@endsection
