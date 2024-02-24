@extends('dashblayout.dashlayout')
@section('body')





    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Investment Plans
        </h1>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="#">Investment Packages</a></li>
            <li class="breadcrumb-item active">Plans</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content" style="margin-top:5%">
        <!-- START Card With Image -->
        <div class="row">
            @if (isset($plans) && $plans->count() > 0)
                @foreach ($plans as $plan) 

                <div class="col-md-4">
                    <div class="card " style="padding:0px!important;box-shadow: 0 2px 28px rgb(0 0 0 / 10%);">
                        <img class="card-img-top" src="{{asset('images/plans/plan' . ($loop->index + 1) . '.png') }}" alt="Card image" style="height:250px;">
                        <div class="card-body" style="padding:0;">
                            <h3 class="card-title text-center">{{ $plan->name }}</h3>
                            <div style="background-image: linear-gradient(to right bottom, #7070db, #24248f)!important;border-radius:7px;">
                                <h3 class="mb-3 text-center" style="color:white;padding-top: 20px;"> {{ $plan->percentage }}% ROI </h3>
                                <div class="row" style="color:white;">
                                    <div class="col-6">
                                        <h6 class="text-center" >${{ $plan->minimum }}</h6>
                                        <h6 class="text-center">Minimum</h6>
                                    </div>
                                    <div class="col-6">
                                        <h6 class="text-center">${{ $plan->maximum }}</h6>
                                        <h6 class="text-center">Maximum</h6>
                                    </div>
                                </div>
                                <form action="{{ route('dashb_plans') }}" method="POST">
                                    @csrf
                                    <input type="text" hidden name="plan" value="{{ $plan->name }}" id="">
                                <div class="row">
                                    <div class="col-10 offset-md-1">
                                        <div class="form-group no-mb">
                                            <label class="text-center" style="color:white;font-weight:700;display:block;">Select Duration</label>
                                            <span class="desc"></span>
        
                                            <select class="form-control mb-4" aria-label="Duration" name="duration" placeholder="Select Duration">
                                                <option value="30">{{ $plan->noofrepeat }} days</option>
                                            </select>
        
                                            <span class="desc"></span>
        
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="basic-addon1">Amount</span>
                                                </div>
                                                <input type="number" class="form-control" name="amount" placeholder="Enter Amount" aria-label="Amount" aria-describedby="basic-addon1">
                                                
                                            </div>
        
                                            <button type="submit" class="btn btn-primary mt-20" style="width:100%"> Proceed With Investment </button>
                                        </div>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                @endforeach
            @else
                <div class="col-md-12 col-lg-12">
                    <div class="box box-default pull-up" style="text-align: center">
                        <h4>
                            No investment plan set by admin
                        </h4>
                    </div>
                </div>
            @endif






        </div>
        <!-- /.row -->
        <!-- END Card with image -->

<br><br>
    </section>
<br>




@endsection()
