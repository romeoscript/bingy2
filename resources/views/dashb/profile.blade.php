@extends('dashb.dashlayout')
@section('dashbody')
<style>
    .profile_link{
        color: black !important;
    }
    .profile_link_container:hover{
        color: blue !important;
    }
    .profile_link_container{
        color: white;
    }
</style>




<section class="content-header">
    <h1>
      Members Profile
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Members</a></li>
      <li class="breadcrumb-item active">My Profile</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">

    <div class="row">
      <div class="col-xl-4 col-lg-5">

        <!-- Profile Image -->
        <div class="box bg-yellow bg-deathstar-dark">
          <div class="box-body box-profile">
            <img class="profile-user-img rounded img-fluid mx-auto d-block" src="@if (Auth::user()->profilepic != "")
            storage/profile/{{Auth::user()->profilepic}}
            @else
            dashb/images/user2-160x160.jpg
            @endif" alt="User profile picture">
            <form action="{{route('userdashb_profile_pic')}}" id="myform" method="post" enctype="multipart/form-data">
                @csrf
             <div class="form-group">
              <input type="file" name="profilepic" id="uploadBox" onchange="fileupload()" required class="form-control" title="Change profile picture">
             </div>
             <div class="form-group">
                <button type="submit" class="btn btn-sm btn-success">Change</button>
            </div>
            </form>


            <h3 class="profile-username text-center mb-0">{{Auth::user()->name}}</h3>

            <h5 class="text-center mt-0"><i class="fa fa-envelope-o mr-10"></i>{{Auth::user()->email}}</h5>

            <div class="row social-states">
                <div class="col-6 text-right"><a href="#" class="link text-white"><i class="ion ion-ios-people-outline"></i> 0</a></div>
                <div class="col-6 text-left"><a href="#" class="link text-white"><i class="ion ion-images"></i> 4</a></div>
            </div>

            <div class="row">
              <div class="col-12">
                  <div class="media-list media-list-hover media-list-divided w-p100 mt-30">
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i>
                        <span class="title ">
                            <a class="profile_link " href="{{route('userdashb_profile')}}">My Profile</a>
                        </span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"><a class="profile_link" href="{{route('userdashb_investment_plans')}}">Invests</a></span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"><a href="{{route('userdashb_wallet_address')}}" class="profile_link"> The Wallet</a></span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"><a href="{{route('userdashb_deposit')}}" class="profile_link">Deposit</a> </span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"><a href="P{{route('userdash_pending_deposit')}}" class="profile_link">Pending Deposit</a> </span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"><a href="{{route('userdash_pedinging_withdrawal')}}" class="profile_link">Pending Withdrawals</a> </span>
                      </h4>
                      <h4 class="media media-single p-15 profile_link_container">
                        <i class="fa fa-arrow-circle-o-right mr-10"></i><span class="title"> <a href="{{route('contact')}}" class="profile_link">Support</a></span>
                      </h4>
                  </div>
              </div>


            </div>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>
      <!-- /.col -->
      <div class="col-xl-8 col-lg-7">
        <div class="box box-solid bg-black">
          <div class="box-header with-border">
            <h3 class="box-title">Personal details</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-12">
                  <form action="{{route('userdashb_personal_detail')}}" method="POST">
                    @csrf
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="name" type="text" value="{{Auth::user()->name}}" placeholder="{{Auth::user()->name}}">
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email Adress</label>
                    <div class="col-sm-10">
                      <input class="form-control" name='email' type="email" value="{{Auth::user()->email}}" placeholder="{{Auth::user()->email}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Phone Number</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="phone" type="tel" value="{{Auth::user()->phone}}" placeholder="{{Auth::user()->phone}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-yellow">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
        <div class="box box-solid bg-black">
          <div class="box-header with-border">
            <h3 class="box-title">Personal address</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-12">
                  <form action="{{route('userdashb_personal_address')}}" method="post">
                    @csrf
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Street</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="street" value="{{Auth::user()->street}}" type="text" placeholder="{{Auth::user()->street}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">City</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="city" type="text" placeholder="{{Auth::user()->city}}" value="{{Auth::user()->city}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">State</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="state" type="text" value="{{Auth::user()->state}}" placeholder="{{Auth::user()->state}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Post Code</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="postal_code" type="number" placeholder="{{Auth::user()->post_code}}" value="{{Auth::user()->post_code}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Referral Link</label>
                    <div class="col-sm-10">
                      <input disabled style="color: black" readonly class="form-control" name="" type="text" value="https://reefresources-fm.comcom/register/?refid={{Auth::user()->id}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-yellow">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
        <div class="box box-solid bg-black">
          <div class="box-header with-border">
            <h3 class="box-title">Social media</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="row">
              <div class="col-12">
                  <form action="{{route('userdashb_social_media')}}" method="POST">
                    @csrf
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Facebook</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="facebook" type="text" value="{{Auth::user()->facebook}}" placeholder="{{Auth::user()->facebook}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Instagram</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="instagram" type="text" value="{{Auth::user()->instagram}}" placeholder="{{Auth::user()->instagram}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Twitter</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="twitter" type="text" value="{{Auth::user()->twitter}}" placeholder="{{Auth::user()->twitter}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Linkedin</label>
                    <div class="col-sm-10">
                      <input class="form-control" name="linkedin" type="text" value="{{Auth::user()->linkedin}}" placeholder="{{Auth::user()->linkedin}}">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-10">
                      <button type="submit" class="btn btn-yellow">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->

      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

  </section>
  <!-- /.content -->

@endsection()
