@extends('dashblayout.dashlayout')
@section('body')


<div class="card" style="width: 18rem;">
    {{-- <img class="card-img-top" src="" alt="Card image cap"> --}}
    <div class="card-body">
        
        <div class="col-12 col-xl-7 px-xl-0">
            <div class="d-none d-sm-block">
    
                <h3 class="fw-extrabold mb-2">Plan</h3>
            </div>
           
            
        </div>
        <form action="{{ route(' ')}}" method="post"> 

        @csrf
   
      <p class="card-text">Some quick Description about plan</p>
      <p class="card-text fw-extrabold text-left">Minimum -  </p>
      <p class="card-text fw-extrabold  text-left">Maximum - $5000 </p>
      <p class="card-text fw-extrabold  text-left">Plan Duration - 1 month</p>
      <input type="text" class="form-control" id="amount" name="amount" placeholder="Enter Amount" aria-describedby="amount"><br>
      <a href="#" class="btn btn-primary">Select</a>

        </form>
    </div>
  </div>





@endsection
