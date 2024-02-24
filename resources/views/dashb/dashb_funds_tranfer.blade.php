@extends('dashblayout.dashlayout')
@section('body')


<div class="container">

    <div class="row card" style="width:60%;margin:auto;">

        <div class="card-header"><h4>Use the form to make tranfer</h4></div>
        
        <div class="col-md-12">
            <!-- Form -->
            <form action="{{ route('dashb_funds_tranfer_save') }}" method="POST">
                @csrf
            <div class="mb-4">
                <label class="my-1 me-2" for="">Email</label>
                <input type="email" class="form-control" id="amount" name="email" placeholder="Enter Beneficiary Email" aria-describedby="amount"><br>
               
            </div>

            <div class="mb-4">
                <label class="my-1 me-2" for="">Amount to Transfer</label>
                <input type="number" class="form-control" id="amount" name="amount" placeholder="Enter Amount to Transfer" aria-describedby="amount"><br>
               
            </div>
            
            <div class="mb-4">
               <button type="submit" class="btn btn-sm btn-success">Proceed with Transfer</button>
            </div>

        </form>

    </div>

    </div>

</div>




@endsection
