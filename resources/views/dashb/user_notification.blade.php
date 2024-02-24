@extends('dashb.dashlayout')
@section('dashbody')



<section class="content-header">
    <h1>
      Emails
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">Examples</a></li>
      <li class="breadcrumb-item active">Emails</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">


      <h5 class="mb-15">We included several modern account management email templates to help you communicate with your users.</h5>

      <div class="row">
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">Welcome Email</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="welcome.html" target="_blank">
                    <img src="../../../images/preview/email-welcome.png" alt="welcome email page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">Verify Emial</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="verify-email.html" target="_blank">
                    <img src="../../../images/preview/email-verify-email.png" alt="Verify Emial page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">Change Password</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="change-pass.html" target="_blank">
                    <img src="../../../images/preview/email-change-pass.png" alt="Change Password page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">User Updates</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="update.html" target="_blank">
                    <img src="../../../images/preview/email-update.png" alt="User Updates page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">Expired Card</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="expired-card.html" target="_blank">
                    <img src="../../../images/preview/email-expired-card.png" alt="Expired Card page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="box">
              <div class="box-header with-border">
                <h3 class="box-title d-block text-center">Closed Account</h3>
              </div>
              <div class="box-body">
                  <a class="d-block" href="closed-account.html">
                    <img src="../../../images/preview/email-closed-account.png" alt="Closed Account page">
                  </a>
              </div>
              <!-- /.box-body -->
            </div>
            <!-- /.box -->
          </div>
      </div>

  </section>



@endsection()
