@extends('dashb.dashlayout')
@section('dashbody')



 <!-- Content Header (Page header) -->
 <section class="content-header">
    <h1>
      My profile
    </h1>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="breadcrumb-item"><a href="#">My Account</a></li>
      <li class="breadcrumb-item active">My Wallet</li>
    </ol>
  </section>

  <!-- Main content -->
  <section class="content">

    <!-- Default box -->
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">My wallet address</h3>

        <div class="box-tools pull-right">
          <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                  title="Collapse">
            <i class="fa fa-minus"></i></button>
          <button type="button" class="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
            <i class="fa fa-times"></i></button>
        </div>
      </div>
      <div class="box-body">
        {{Auth::user()->wallet_adddress}}
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        Proceed to <a href="{{route('userdashb_deposit')}}">Deposit</a> to get wallet address for funding your account
      </div>
      <!-- /.box-footer-->
    </div>
    <!-- /.box -->

  </section>
  <!-- /.content -->



@endsection()
