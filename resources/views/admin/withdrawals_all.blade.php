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
                            <h3 class="card-title text-white">All Withdrawal</h3>
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
                                                    <th>Amount</th>
                                                    <th>Time</th>
                                                    <th>Type</th>
                                                    <th>Account</th>
                                                    <th>Account Address</th>
                                                    <th>Status</th>
                                                    <th>View/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               

            @if ($withdrawals)
            @foreach ($withdrawals as $withdrawal)
                <tr>
                    <td>{{ $loop->index + 1 }}</td>
                    <td>{{ $withdrawal->name }}</td>
                    <td>$ {{ $withdrawal->amount }}</td>
                    <td>{{ Carbon\Carbon::parse($withdrawal->created_at)->diffForHumans() }}
                    </td>
                    <td>withdrawal</td>
                    <td> {{ $withdrawal->method }}</td>
                    <td>{{ $withdrawal->methodaccount }}</td>
                    <td>{{ $withdrawal->status > 0 ? 'Verified' : 'Pending' }}
                    </td>
                    <td>
                        <button type="button"
                            class="btn btn-sm btn-primary btn-custom "
                            value="1167" data-toggle="modal"
                            data-target="#myModaldepo{{ $loop->index + 1 }}">View</button>


                            <button type="button"
                            class="btn btn-sm btn-success btn-custom "
                            value="1167" data-toggle="modal"
                            data-target="{{$withdrawal->status > 0? "Completed":"#myModalpaid"}}{{ $loop->index + 1 }}">{{$withdrawal->status > 0? "Completed":"Mark Paid"}}</button>

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
                                                    withdrawal</h3>
                                            </div>
                                            <ul class="list-group">
                                                <li class="list-group-item">
                                                    <span><b>User</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $withdrawal->name }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Amount</b></span>
                                                    <span
                                                        class="float-right tx-primary">$
                                                        {{ $withdrawal->amount }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>withdrawal
                                                            Method</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $withdrawal->method }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>withdrawal
                                                            Account</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $withdrawal->methodaccount }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>Verified
                                                            on</b></span> <span
                                                        class="float-right tx-primary">{{ Carbon\Carbon::parse($withdrawal->updated_at)->diffForHumans() }}</span>
                                                </li>
                                                <li class="list-group-item">
                                                    <span><b>withdrawal
                                                            Account</b></span>
                                                    <span
                                                        class="float-right tx-primary">{{ $withdrawal->methodaccount }}</span>
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
                                                        value="{{ $withdrawal->userid }}"
                                                        class="tex">
                                                    <input name="name"
                                                        type="hidden"
                                                        value="{{ $withdrawal->name }}">
                                                    <input name="id"
                                                        type="hidden"
                                                        value="{{ $withdrawal->id }}">
                                                    <div
                                                        class="form-group">
                                                        <label>Amount</label><br>
                                                        <input type="text"
                                                            name="amount"
                                                            class="form-control"
                                                            value="{{ $withdrawal->amount }}">
                                                    </div>
                                                    <div
                                                        class="form-group">
                                                        <label>Method</label><br>
                                                        <input type="text"
                                                            name="method"
                                                            class="form-control"
                                                            value="{{ $withdrawal->method }}">
                                                    </div>
                                                    <div
                                                        class="form-group">
                                                        <label>Method account</label><br>
                                                        <input type="text"
                                                            name="methodaccount"
                                                            class="form-control"
                                                            value="{{ $withdrawal->methodaccount }}">
                                                    </div>
                                                    <div
                                                        class="form-group">
                                                        <label>withdrawal
                                                            Date</label><br>
                                                        <input type="date"
                                                            name="withdrawaldate"
                                                            class="form-control"
                                                            value="{{ $withdrawal->withdrawalDate }}">
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
                                        ${{ $withdrawal->amount }} from
                                        {{ $withdrawal->name }} ?</h4>
                                </div>
                                <div class="modal-footer no-border">
                                    <button type="button"
                                        class="btn btn-secondary waves-effect"
                                        data-dismiss="modal">No</button>
                                    <a href="{{ route('deletewithdrawal', $withdrawal->id) }}"
                                        class="btn btn-pink waves-effect">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div id="myModalpaid{{ $loop->index + 1 }}"
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
                                        ${{ $withdrawal->amount }} withdrawal from
                                        {{ $withdrawal->name }} to the {{$withdrawal->account}} {{$withdrawal->methodaccount}}as Complete ?</h4>
                                </div>
                                <div class="modal-footer no-border">
                                    <button type="button"
                                        class="btn btn-secondary waves-effect"
                                        data-dismiss="modal">No</button>
                                    <a href="{{ route('markwithdrawalpaid',$withdrawal->id) }}"
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
