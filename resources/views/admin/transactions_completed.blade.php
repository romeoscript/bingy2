@extends("adminlayout.adminlayout")
@section('body')
    <div class="content-page">

        <div class="content">
            <div class="container-fluid">

                <div class="row">
                </div>


                <div id="usd" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style="display: none">
                </div>

                <div id="del_tra" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style="display: none">

                </div>
                <button style="display: none;" type="button" id="show_tra" data-toggle="modal" data-target="#usd"></button>
                <button style="display: none;" type="button" id="show_del" data-toggle="modal"
                    data-target="#del_tra"></button>

                <div class="row">

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">All Completed Transactions</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="table-responsive">
                                            <table id="datatable" class="table table-striped  table-bordered nowrap"
                                                style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th>SN</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Amount</th>
                                                        <th>Time</th>
                                                        <th>Type</th>
                                                        <th>Status</th>
                                                        <th>View/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @if ($transactions_deposits)
                                                    @foreach ($transactions_deposits as $transactions_deposit )
                                                    <tr>
                                                        <td>{{$loop->index + 1}}</td>
                                                        <td>{{$transactions_deposit->name}}</td>
                                                        <td>{{$transactions_deposit->email}}</td>
                                                        <td>$ {{$transactions_deposit->amount}}</td>
                                                        <td>{{Carbon\Carbon::parse($transactions_deposit->created_at)->diffForHumans()}}</td>
                                                        <td>Deposit</td>
                                                        <td>{!! $transactions_deposit->status > 0?  "<span class='badge badge-success'>Verified & completed</span></td>":"<span class='badge badge-warning'>pending</span></td>" !!}</td>
                                                        <td>
                                                            <button type="button"
                                                            class="btn btn-sm btn-primary btn-custom "
                                                            value="1167" data-toggle="modal"
                                                            data-target="#myModaldepoview{{ $loop->index + 1 }}">View</button>



                                                                <button type="button"
                                                                class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                data-toggle="modal"
                                                                data-target="#myModaldepodel{{ $loop->index + 1 }}">Delete</button>
                                                        </td>
                                                        
                                                                <!-- The Modal -->
                                                                <div class="modal fade"
                                                                    id="myModaldepoview{{ $loop->index + 1 }}" role="dialog">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <div class="">
                                                                                <button type="button"
                                                                                    class="close"
                                                                                    data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">×</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="modal-body">
                                                                                <div class="">
                                                                                    <div class="card">
                                                                                        <div
                                                                                            class="card-header bg-success">
                                                                                            <h3
                                                                                                class="card-title text-white">
                                                                                                Deposit</h3>
                                                                                        </div>
                                                                                        <ul class="list-group">
                                                                                            <li class="list-group-item">
                                                                                                <span><b>User</b></span>
                                                                                                <span
                                                                                                    class="float-right tx-primary">{{ $transactions_deposit->name }}</span>
                                                                                            </li>
                                                                                            <li class="list-group-item">
                                                                                                <span><b>Amount</b></span>
                                                                                                <span
                                                                                                    class="float-right tx-primary">$
                                                                                                    {{ $transactions_deposit->amount }}</span>
                                                                                            </li>
                                                                                            <li class="list-group-item">
                                                                                                <span><b>Deposit
                                                                                                        Method</b></span>
                                                                                                <span
                                                                                                    class="float-right tx-primary">{{ $transactions_deposit->method }}</span>
                                                                                            </li>
                                                                                            <li class="list-group-item">
                                                                                                <span><b>Verified
                                                                                                        on</b></span> <span
                                                                                                    class="float-right tx-primary">{{ Carbon\Carbon::parse($transactions_deposit->updated_at)->diffForHumans() }}</span>
                                                                                            </li>
                                                                                            <li class="list-group-item">
                                                                                                <span><b>Deposit
                                                                                                        Account</b></span>
                                                                                                <span
                                                                                                    class="float-right tx-primary">{{ $transactions_deposit->methodAccount }}</span>
                                                                                            </li>
                                                                                        </ul>
                                                                                        <div class="card-body">
                                                                                            <hr>
                                                                                            <div
                                                                                                class="card-header bg-dark">
                                                                                                <h3
                                                                                                    class="card-title text-white">
                                                                                                    Edit Deposit</h3>
                                                                                            </div>
                                                                                            <small
                                                                                                class="text-info">You
                                                                                                can Edit this particular
                                                                                                deposit as you wish
                                                                                                below</small>
                                                                                            <form method="post"
                                                                                                action="{{ route('depositupdate') }}">
                                                                                                @csrf
                                                                                                <input type="text" hidden
                                                                                                    name="userid"
                                                                                                    value="{{ $transactions_deposit->userid }}"
                                                                                                    class="tex">
                                                                                                <input name="name"
                                                                                                    type="hidden"
                                                                                                    value="{{ $transactions_deposit->name }}">
                                                                                                <input name="id"
                                                                                                    type="hidden"
                                                                                                    value="{{ $transactions_deposit->id }}">
                                                                                                <div
                                                                                                    class="form-group">
                                                                                                    <label>Amount</label><br>
                                                                                                    <input type="text"
                                                                                                        name="amount"
                                                                                                        class="form-control"
                                                                                                        value="{{ $transactions_deposit->amount }}">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="form-group">
                                                                                                    <label>Deposit
                                                                                                        Date</label><br>
                                                                                                    <input type="date"
                                                                                                        name="depositdate"
                                                                                                        class="form-control"
                                                                                                        value="{{ $transactions_deposit->depositDate }}">
                                                                                                </div>

                                                                                                <div
                                                                                                    class="text-center">
                                                                                                    <button type="submit"
                                                                                                        name="up_am"
                                                                                                        class="btn btn-success waves-effect waves-light">Update
                                                                                                        Amount</button>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="modal-footer"
                                                                                style="border:none;">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                                <div id="myModaldepodel{{ $loop->index + 1 }}"
                                                                    class="modal fade " role="dialog">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <div class="">
                                                                                <button type="button"
                                                                                    class="close"
                                                                                    data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">×</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="modal-body">
                                                                                <h4>Are you sure to delete
                                                                                    ${{ $transactions_deposit->amount }} from
                                                                                    {{ $transactions_deposit->name }} ?</h4>
                                                                            </div>
                                                                            <div class="modal-footer no-border">
                                                                                <button type="button"
                                                                                    class="btn btn-secondary waves-effect"
                                                                                    data-dismiss="modal">No</button>
                                                                                <a href="{{ route('deletedeposit', $transactions_deposit->id) }}"
                                                                                    class="btn btn-pink waves-effect">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    </tr>
                                                    @endforeach

                                                    @endif

                                                    @if ($transactions_withdrawals)
                                                    @foreach ($transactions_withdrawals as $transactions_withdrawal )
                                                    <tr>
                                                        <td>{{$loop->index + 1}}</td>
                                                        <td>{{$transactions_withdrawal->name}}</td>
                                                        <td>{{$transactions_withdrawal->email}}</td>
                                                        <td>$ {{$transactions_withdrawal->amount}}</td>
                                                        <td>{{Carbon\Carbon::parse($transactions_withdrawal->created_at)->diffForHumans()}}</td>
                                                        <td>Withdrawal</td>
                                                        <td>{!! $transactions_withdrawal->status > 0? "<span class='badge badge-success'>Verified & completed</span></td>": "<span class='badge badge-warning'>Pending</span></td>" !!}</td>
                                                        <td>
                                                            
                                                            <button type="button"
                                                            class="btn btn-sm btn-primary btn-custom "
                                                            value="1167" data-toggle="modal"
                                                            data-target="#myModalwithview{{ $loop->index + 1 }}">View</button>



                                                                <button type="button"
                                                                class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                data-toggle="modal"
                                                                data-target="#myModalwithdel{{ $loop->index + 1 }}">Delete</button>
                                                        </td>














                                                        
                    <!-- The Modal -->
                    <div class="modal fade"
                    id="myModalwithview{{ $loop->index + 1 }}" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="">
                                <button type="button"
                                    class="close"
                                    data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="">
                                    <div class="card">
                                        <div
                                            class="card-header bg-success">
                                            <h3
                                                class="card-title text-white">
                                                withdrawal</h3>
                                        </div>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <span><b>User</b></span>
                                                <span
                                                    class="float-right tx-primary">{{ $transactions_withdrawal->name }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>Amount</b></span>
                                                <span
                                                    class="float-right tx-primary">$
                                                    {{ $transactions_withdrawal->amount }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>withdrawal
                                                        Method</b></span>
                                                <span
                                                    class="float-right tx-primary">{{ $transactions_withdrawal->method }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>withdrawal
                                                        Account</b></span>
                                                <span
                                                    class="float-right tx-primary">{{ $transactions_withdrawal->methodaccount }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>Verified
                                                        on</b></span> <span
                                                    class="float-right tx-primary">{{ Carbon\Carbon::parse($transactions_withdrawal->updated_at)->diffForHumans() }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>withdrawal
                                                        Account</b></span>
                                                <span
                                                    class="float-right tx-primary">{{ $transactions_withdrawal->methodaccount }}</span>
                                            </li>
                                        </ul>
                                        <div class="card-body">
                                            <hr>
                                            <div
                                                class="card-header bg-dark">
                                                <h3
                                                    class="card-title text-white">
                                                    Edit withdrawal</h3>
                                            </div>
                                            <small
                                                class="text-info">You
                                                can Edit this particular
                                                withdrawal as you wish
                                                below</small>
                                            <form method="post"
                                                action="{{ route('editwithdrawal') }}">
                                                @csrf
                                                <input type="text" hidden
                                                    name="userid"
                                                    value="{{ $transactions_withdrawal->userid }}"
                                                    class="tex">
                                                <input name="name"
                                                    type="hidden"
                                                    value="{{ $transactions_withdrawal->name }}">
                                                <input name="id"
                                                    type="hidden"
                                                    value="{{ $transactions_withdrawal->id }}">
                                                <div
                                                    class="form-group">
                                                    <label>Amount</label><br>
                                                    <input type="text"
                                                        name="amount"
                                                        class="form-control"
                                                        value="{{ $transactions_withdrawal->amount }}">
                                                </div>
                                                <div
                                                    class="form-group">
                                                    <label>Method</label><br>
                                                    <input type="text"
                                                        name="method"
                                                        class="form-control"
                                                        value="{{ $transactions_withdrawal->method }}">
                                                </div>
                                                <div
                                                    class="form-group">
                                                    <label>Method account</label><br>
                                                    <input type="text"
                                                        name="methodaccount"
                                                        class="form-control"
                                                        value="{{ $transactions_withdrawal->methodaccount }}">
                                                </div>
                                                <div
                                                    class="form-group">
                                                    <label>withdrawal
                                                        Date</label><br>
                                                    <input type="date"
                                                        name="withdrawaldate"
                                                        class="form-control"
                                                        value="{{ $transactions_withdrawal->withdrawalDate }}">
                                                </div>

                                                <div
                                                    class="text-center">
                                                    <button type="submit"
                                                        name="up_am"
                                                        class="btn btn-success waves-effect waves-light">Update
                                                        Amount</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer"
                                style="border:none;">
                            </div>
                        </div>
                    </div>
                </div>


                <div id="myModalwithdel{{ $loop->index + 1 }}"
                    class="modal fade " role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="">
                                <button type="button"
                                    class="close"
                                    data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h4>Are you sure to delete
                                    ${{ $transactions_withdrawal->amount }} from
                                    {{ $transactions_withdrawal->name }} ?</h4>
                            </div>
                            <div class="modal-footer no-border">
                                <button type="button"
                                    class="btn btn-secondary waves-effect"
                                    data-dismiss="modal">No</button>
                                <a href="{{ route('deletewithdrawal', $transactions_withdrawal->id) }}"
                                    class="btn btn-pink waves-effect">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
                                                    </tr>
                                                    @endforeach

                                                    @endif

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
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
                    data: 'hide_hint=' + 1,
                    success: function(data) {
                        $().html(data);
                    }
                });
            }
        </script>
    </div>
@endsection
