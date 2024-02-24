@extends('dashb.dashlayout')
@section('dashbody')


<div class="col-lg-6 col-12">
    <div class="box bg-danger box-solid">
      <div class="box-header with-border">
        <h4 class="box-title">Password Reset</h4>
        <ul class="box-controls pull-right">
          <li><a class="box-btn-close" href="#"></a></li>
          <li><a class="box-btn-slide"  href="#"></a></li>
          <li><a class="box-btn-fullscreen" href="#"></a></li>
        </ul>
      </div>

      <div class="box-content">
        <div class="box-body">
          <form action="" method="post">
              @csrf
            <div class="form-group row">
                <label class="col-12" for="login1-password">Password</label>
                <div class="col-12">
                    <input type="password" class="form-control" id="login1-password" name="oldpassword" placeholder="Enter your password..">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-12" for="lock1-password1">New Password</label>
                <div class="col-12">
                    <input type="password" class="form-control" id="lock1-password1" name="newpassword" placeholder="Enter your new password..">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-12" for="lock1-password1">Confirm New Password</label>
                <div class="col-12">
                    <input type="password" class="form-control" id="lock1-password1" name="cnewpassword" placeholder="Renter your new password..">
                </div>
            </div>

            <div class="form-group row mb-0">
                <div class="col-12">
                    <button type="submit" class="btn btn-danger">
                        <i class="fa fa-arrow-right mr-5"></i> Change password
                    </button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</div>


@endsection()
