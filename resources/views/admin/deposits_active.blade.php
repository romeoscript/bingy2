@extends("adminlayout.adminlayout")
@section("body")


<div class="content-page">

    <div class="content">
        <div class="container-fluid">

            <div class="row">
            </div>




                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header bg-primary">
                            <h3 class="card-title text-white">All Completed Deposits</h3>
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
                                                    <th>Sender</th>
                                                    <th>Amount</th>
                                                    <th>Time</th>
                                                    <th>Type</th>
                                                    <th>Status</th>
                                                    <th>View/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               

            @if ($deposits)
            @foreach ($deposits as $deposit)
                <tr>
                    <td>{{ $loop->index + 1 }}</td>
                    <td>{{ $deposit->name }}</td>
                    <td>$ {{ $deposit->amount }}</td>
                    <td>{{ Carbon\Carbon::parse($deposit->created_at)->diffForHumans() }}
                    </td>
                    <td>Deposit</td>
                    <td>{{ $deposit->status > 0 ? 'Verified' : 'Pending' }}
                    </td>
                    <td>
                        <button type="button"
                            class="btn btn-sm btn-primary btn-custom "
                            value="1167" data-toggle="modal"
                            data-target="#myModaldepo{{ $loop->index + 1 }}">View</button>


                            <button type="button"
                            class="btn btn-sm btn-success btn-custom "
                            value="1167" data-toggle="modal"
                            data-target="{{$deposit->status > 0? "Completed":"#myModalcomple"}}{{ $loop->index + 1 }}">{{$deposit->status > 0? "Completed":"Mark Complete"}}</button>

                        <button type="button"
                            class="btn btn-sm btn-pink btn-custom " value="1167"
                            data-toggle="modal"
                            data-target="#myModaldel{{ $loop->index + 1 }}">Delete</button>
                    </td>




                    <!-- The Modal -->
                    <div class="modal fade"
                        id="myModaldepo{{ $loop->index + 1 }}" role="dialog">
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
                                                        class="float-right tx-primary">{{ $deposit->name }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Amount</b></span>
                                                    <span
                                                        class="float-right tx-primary">$
                                                        {{ $deposit->amount }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Deposit
                                                            Method</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $deposit->method }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Verified
                                                            on</b></span> <span
                                                        class="float-right tx-primary">{{ Carbon\Carbon::parse($deposit->updated_at)->diffForHumans() }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Deposit
                                                            Account</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $deposit->methodAccount }}</span>
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
                                                        value="{{ $deposit->userid }}"
                                                        class="tex">
                                                    <input name="name"
                                                        type="hidden"
                                                        value="{{ $deposit->name }}">
                                                    <input name="id"
                                                        type="hidden"
                                                        value="{{ $deposit->id }}">
                                                    <div
                                                        class="form-group">
                                                        <label>Amount</label><br>
                                                        <input type="text"
                                                            name="amount"
                                                            class="form-control"
                                                            value="{{ $deposit->amount }}">
                                                    </div>
                                                    <div
                                                        class="form-group">
                                                        <label>Deposit
                                                            Date</label><br>
                                                        <input type="date"
                                                            name="depositdate"
                                                            class="form-control"
                                                            value="{{ $deposit->depositDate }}">
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


                    <div id="myModaldel{{ $loop->index + 1 }}"
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
                                        ${{ $deposit->amount }} from
                                        {{ $deposit->name }} ?</h4>
                                </div>
                                <div class="modal-footer no-border">
                                    <button type="button"
                                        class="btn btn-secondary waves-effect"
                                        data-dismiss="modal">No</button>
                                    <a href="{{ route('deletedeposit', $deposit->id) }}"
                                        class="btn btn-pink waves-effect">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div id="myModalcomple{{ $loop->index + 1 }}"
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
                                    <h4>Are you sure to mark
                                        ${{ $deposit->amount }} deposit from
                                        {{ $deposit->name }} as Complete ?</h4>
                                </div>
                                <div class="modal-footer no-border">
                                    <button type="button"
                                        class="btn btn-secondary waves-effect"
                                        data-dismiss="modal">No</button>
                                    <a href="{{ route('approve_deposit',$deposit->id) }}"
                                        class="btn btn-success waves-effect">Yes Proceed</a>
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
                success: function (data) {
                    $().html(data);
                }
            });
        }
    </script>
</div>

@endsection
