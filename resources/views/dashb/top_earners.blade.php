@extends("dashb.dashlayout")
@section('dashbody')



<section class="content-header">
    <h1>
      Members
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Members</a></li>
      <li class="breadcrumb-item active">Top Earners</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">
      <div class="row">

        @if ($top_earners->count()>0)

        @foreach ($top_earners as $top_earner)

        <div class="col-6 col-md-6 col-lg-4 col-xl-3">
            <div class="box box-body pull-up">
              <div class="flexbox align-items-center">
                <label class="toggler toggler-yellow">
                  <input type="checkbox" checked>
                  <i class="fa fa-star"></i>
                </label>
                <div class="dropdown">
                  <a data-toggle="dropdown" href="#" aria-expanded="false"><i class="ion-android-more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-comments"></i> Messages</a>
                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#"><i class="fa fa-fw fa-remove"></i> Remove</a>
                  </div>
                </div>
              </div>
              <div class="pt-3">
                  <img class="rounded my-10" src="{{$top_earner->userimages? profile/$top_earner->profilepic : 'dashb/images/avatar/profileavatar.png'}}" alt="">
                <h3 class="m-0"><a href="#">{{$top_earner->name}}</a></h3>
                <span>{{$loop->index + 1}} Top Investor</span>
                <div class="bt-1 py-10 mt-10">
                  <p class="mb-0">...</p>
                </div>
                <div class="mt-1">
                  <a target="_blank" href="facebook.com/{{$top_earner->facebook}}" class="btn btn-social-icon btn-rounded btn-facebook btn-outline"><i class="fa fa-facebook"></i></a>
                  <a target="_blank" href="twiter.com/{{$top_earner->twitter}}" class="btn btn-social-icon btn-rounded btn-twitter btn-outline"><i class="fa fa-twitter"></i></a>
                  <a target="_blank" href="instagram.com/{{$top_earner->instagram}}" class="btn btn-social-icon btn-rounded btn-instagram btn-outline"><i class="fa fa-instagram"></i></a>
                  <a target="_blank" href="#" class="btn btn-social-icon btn-rounded btn-vimeo btn-outline"><i class="fa fa-vimeo"></i></a>
                </div>
              </div>
            </div>
          </div>

        @endforeach

        @else

        @endif
      </div>
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link" href="#">
              <span class="ion-ios-arrow-thin-left"></span>
            </a>
          </li>
          {{ $top_earners->onEachSide(6)->links() }}
          <li class="page-item">
            <a class="page-link" href="#">
              <span class="ion-ios-arrow-thin-right"></span>
            </a>
          </li>
        </ul>
      </nav>
  </section>



@endsection()
