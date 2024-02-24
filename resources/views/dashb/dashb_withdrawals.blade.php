@extends('dashblayout.dashlayout')
@section('body')
<div class="card-header text-center"><h4>Use the form to make withdrawal</h4></div>


<form action="{{ route("userdashb_withdrawal_post") }}" method="post">

    @csrf

<div class="card" style="width:60%;margin:auto;">
    <div class="card-body">
        
      <p class="card-text fw-extrabold text-left">Minimum Withdrawal -{{ $user_fund->withdrawal_minimum }}</p>
      <p class="card-text fw-extrabold  text-left">Maximum Withdrawal - {{ $user_fund->withdrawal_maximum }} </p>

     <div class="mb-4">
      <input type="text" class="form-control" id="amount" name="amount" placeholder="Enter Withdraw Amount" aria-describedby="amount"><br>

     </div>
     <div class="mb-4">
      <select class="form-control" name="method" id="">
        <option value="Btc">BITCOIN</option>
        <option value="Eth">ETH</option>
        <option value="USDT">USDT</option>
        <option value="PAYPAL">PAYPAL</option>
        <option value="XRP">XRP</option>
      </select>
    </div>

      <input type="text" class="form-control" id="methodAccount" name="address" placeholder="Enter Address" aria-describedby="amount"><br>
      <br>
      {{-- <a href="#" class="btn btn-primary">Withdraw</a> --}}
      <button type="submit" class="btn btn-primary"> Withdraw </button>
    </div>
  </div>

</form>


@endsection
