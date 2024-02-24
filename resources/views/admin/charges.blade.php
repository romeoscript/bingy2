@extends("adminlayout.adminlayout")
@section("body")



<div class="content-page">

    <div class="content">
    <div class="container-fluid">

    <div class="row">
    </div>


    <div id="usd" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
    </div>

    <div id="del_tra" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">

    </div>
    <button style="display: none;" type="button" id="show_tra" data-toggle="modal" data-target="#usd"></button>
    <button style="display: none;" type="button" id="show_del" data-toggle="modal" data-target="#del_tra"></button>

    <div class="row">
    <div class="col-xl-12">
    <div class="card">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">Set Charges</h3>
    </div>
    <div class="card-body">
    <form method="post" action="{{route('charges_set_save')}}">
        @csrf
    <div class="row">
    <div class="col-md-6">
    <div class="form-group">
    <label>Deposit - <small>{{$paymentscharges?$paymentscharges->depositcharge:0}}%</small></label>
    <input type="number" class="form-control" name="depositcharge" value="{{$paymentscharges?$paymentscharges->depositcharge:0}}">
    </div>
    </div>
    <div class="col-md-6">
    <div class="form-group">
    <label>Withdrawal - <small>{{$paymentscharges? $paymentscharges->withdrawlcharges:0}} %</small></label>
    <input type="number" class="form-control" name="withdrawlcharges" value="{{$paymentscharges? $paymentscharges->withdrawlcharges:0}}">
    </div>
    </div>
    </div>
    <div class="text-center">
    <button type="submit" name="update_charge" class="btn btn-primary waves-effect waves-light">Update Charges</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <footer class="footer text-right">
    2022 ©
    </footer>
    <script>
    function hide_hint() {
        $.ajax({
        type: "POST",
        url: 'ajax.php',
        data:'hide_hint='+1,
        success: function(data){
            $().html(data);
        }
        });
    }
    </script>
    </div>

    @endsection
