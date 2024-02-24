@extends('dashb.dashlayout')
@section('dashbody')



<section class="content-header">
    <h1>
      Messages
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">My messages</a></li>
      <li class="breadcrumb-item active">messages</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">


      <h5 class="mb-15">Messages from admin and promotions are included here</h5>

      <div class="row">
          @if ($messages->count()>0)

          @foreach ($messages  as $message)
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">{{$message->message_title}}</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="welcome.html" target="_blank">
                    {{$message->message}}
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          @endforeach
          <div class="col-md-12 col-lg-12">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">No new messages</h3>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          @else

          @endif

      </div>

  </section>



@endsection()
