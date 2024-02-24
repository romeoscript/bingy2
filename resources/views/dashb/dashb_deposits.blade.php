@extends('dashblayout.dashlayout')
@section('body')

<div class="container">

    <div class="row card">

        <div class="card-header text-center"><h4>Use the form to make a deposit</h4></div>

        <style>
            form{
                width: 60%;
                margin: auto;
            }
        </style>
            
            <!-- Form -->
            <form action="{{ route('dashb_depositsubmit') }}" method="POST">
                @csrf
            
                <div class="mb-4">
                    <label class="my-1 me-2" for="">Enter Amount</label>
                    <input type="number" class="form-control" id="amount" name="amount" placeholder="Enter Amount" aria-describedby="amount"><br>

                </div>
                <div class="mb-4">
                <label class="my-1 me-2" for="">Chose payment Method</label>
                <input type="hidden" class="form-control" id="email" name="email">
                <input type="hidden" class="form-control" id="name" name="name">
                <input type="hidden" class="form-control" id="methodAccount" name="methodAccount">
                <input type="hidden" class="form-control" id="userId" name="userId">
                <select class="form-select form-control" name="method" aria-label="Default select example">
                    <option selected class="form-control">Select a Payment Method</option>
                    <option class="form-control" value="btc_address">BTC</option>
                    <option class="form-control" value="eth">ETH</option>
                    <option class="form-control" value="usdt">USDT (ERC20 NETWORK)</option>
                    <option class="form-control" value="paypal">Paypal</option>
                    <option class="form-control" value="xrp">XRP</option>
                    {{-- <option value="usdt">USDT</option> --}}
                </select>
                <br>
                
            </div>
            <div class="mb-4">
                <button class="btn btn-success" type="submit">Deposit</button>
            </div>

        </form>

    </div>

    </div>




@endsection
