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

                <div id="edit_wal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                    aria-hidden="true" style="display: none">

                </div>
                <button style="display: none;" type="button" id="show_tra" data-toggle="modal" data-target="#usd"></button>
                <button style="display: none;" type="button" id="show_del" data-toggle="modal"
                    data-target="#del_tra"></button>
                <button style="display: none;" type="button" id="show_wal" data-toggle="modal"
                    data-target="#edit_wal"></button>

                <div class="row">
                    <div class="col-md-12 text-center mb-3">
                        <div id="dac437" class="modal fade" tabindex="-1" role="dialog"
                            aria-labelledby="full-width-modalLabel" aria-hidden="true" style="display: none">
                            <div class="modal-dialog modal-full">
                                <div class="modal-content">
                                    <div class="">
                                        <button type="button" class="close" data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <h4>Are you ready to {{ $user->blocked < 1 ? 'Deactivate' : 'Activate' }}
                                            {{ $user->name }}?</h4>
                                    </div>
                                    <div class="modal-footer" style="border: 0;">
                                        <button type="button" class="btn btn-secondary waves-effect"
                                            data-dismiss="modal">No</button>
                                        <a href="{{ route($user->blocked < 1 ? 'adminblockuser' : 'adminunblockuser', $user->id) }}"
                                            class="btn btn-info waves-effect">{{ $user->blocked < 1 ? 'Deactivate' : 'Activate' }}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            class="btn btn-sm btn-{{ $user->blocked < 1 ? 'pink' : 'primary' }} waves-effect waves-light mt-4"
                            data-toggle="modal"
                            data-target="#dac437">{{ $user->blocked < 1 ? 'Deactivate' : 'Activate' }}</button>
                        <a href="{{ route('bonus_view_id', $user->id) }}" class="btn mt-4 btn-sm btn-success waves-effect"
                            data-dismiss="modal">Bonus</a>
                        <a href="{{ route('penalty_view_id', $user->id) }}"
                            class="btn mt-4 btn-sm btn-warning waves-effect" data-dismiss="modal">Penalty</a>
                        <div id="user437" class="modal fade" tabindex="-1" role="dialog"
                            aria-labelledby="full-width-modalLabel" aria-hidden="true" style="display: none">
                            <div class="modal-dialog modal-full">
                                <div class="modal-content">
                                    <div class="">
                                        <button type="button" class="close" data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <h4>Are you ready to delete {{ $user->name }}?</h4>
                                    </div>
                                    <div class="modal-footer" style="border: 0;">
                                        <button type="button" class="btn btn-secondary waves-effect"
                                            data-dismiss="modal">No</button>
                                        <a href="{{ route('userdelete', $user->id) }}"
                                            class="btn btn-pink waves-effect">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn mt-4 btn-sm btn-pink waves-effect waves-light" data-toggle="modal"
                            data-target="#user437">Delete</button>
                        <div id="trans437" class="modal fade" tabindex="-1" role="dialog"
                            aria-labelledby="full-width-modalLabel" aria-hidden="true" style="display: none">
                            <div class="modal-dialog modal-full">
                                <div class="modal-content">
                                    <div class="">
                                        <button type="button" class="close" data-dismiss="modal"
                                            aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <h4>Are you ready to {{ $fund->transfer >= 1 ? 'Deactivate' : 'Activate' }}
                                            Transfer
                                            for {{ $user->name }}?</h4>
                                    </div>
                                    <div class="modal-footer" style="border: 0;">
                                        <button type="button" class="btn btn-secondary waves-effect"
                                            data-dismiss="modal">No</button>
                                        <a href="{{ route($fund->transfer >= 1 ? 'deactivate_fund_tranfer' : 'activate_fund_tranfer', $fund->id) }}"
                                            class="btn btn-pink waves-effect">{{ $fund->transfer >= 1 ? 'Deactivate' : 'Activate' }}
                                            Transfer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button"
                            class="btn mt-4 btn-sm btn-{{ $fund->transfer >= 1 ? 'pink' : 'primary' }} waves-effect waves-light"
                            data-toggle="modal"
                            data-target="#trans437">{{ $fund->transfer >= 1 ? 'Deactivate' : 'Activate' }}
                            Transfer</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="card card-default card-fill">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Account Information</h3>
                            </div>
                            <div class="card-body">

                                <div class="about-info-p">
                                    <strong class="text-dark">Password</strong>
                                    <br>
                                    <p class="text-muted">{{ $user->password }}</p>
                                </div>
                                <div class="about-info-p">
                                    <strong class="text-dark">Email</strong>
                                    <br>
                                    <p class="text-muted">{{ $user->email }}
                                    </p>
                                </div>
                                <div class="about-info-p">
                                    <strong class="text-dark">Location</strong>
                                    <br>
                                    <p class="text-muted">{{ $user->address }}</p>
                                </div>
                                <div class="about-info-p m-b-0">
                                    <strong class="text-dark">Status</strong>
                                    <br>
                                    <p class="text-muted">{{ $user->blocked < 1 ? 'Active' : 'Blocked' }}</p>
                                </div>
                                <div class="about-info-p m-b-0">
                                    <strong class="text-dark">Created On</strong>
                                    <br>
                                    <p class="text-muted">
                                        {{ Carbon\Carbon::parse($user->created_at)->diffForHumans() }}</p>
                                </div>
                                <div class="about-info-p m-b-0">
                                    <strong class="text-dark">Referred</strong>
                                    <br>
                                    <p class="text-muted">{{ $referrals->count() }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">

                        <div class="card card-default card-fill">
                            <div class="card-header bg-success">
                                <h3 class="card-title text-white">Transaction Summary</h3>
                            </div>
                            <div class="card-body">
                                <div class="about-info-p">
                                    <strong class="text-dark">System Balance</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->balance }}</p>
                                </div>
                                <div class="about-info-p">
                                    <strong class="text-dark">Available Balance</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->totalbalance }}</p>
                                </div>
                                <div class="about-info-p">
                                    <strong class="text-dark">Total Deposits</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->totaldepost }}</p>
                                </div>
                                <div class="about-info-p">
                                    <strong class="text-dark">Total Withdrawals</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->totalwithdrawal }}</p>
                                </div>
                                <div class="about-info-p m-b-0">
                                    <strong class="text-dark">Total Bonuses</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->bonus }}</p>
                                </div>
                                <div class="about-info-p m-b-0">
                                    <strong class="text-dark">Total Earning</strong>
                                    <br>
                                    <p class="text-muted">$ {{ $fund->totalprofit }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Transactions from {{ $user->name }}</h3>
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
                                                                                                    value="{{ $user->id }}"
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








                                                    @if ($withdrawals)
                                                        @foreach ($withdrawals as $withdrawal)
                                                            <tr>
                                                                <td>{{ $loop->index + 1 }}</td>
                                                                <td>{{ $withdrawal->name }}</td>
                                                                <td>$ {{ $withdrawal->amount }}</td>
                                                                <td>{{ Carbon\Carbon::parse($withdrawal->created_at)->diffForHumans() }}
                                                                </td>
                                                                <td>withdrawal</td>
                                                                <td>{{ $withdrawal->status > 0 ? 'Verified' : 'Pending' }}
                                                                </td>
                                                                <td>
                                                                    <button type="button"
                                                                        class="btn btn-sm btn-primary btn-custom "
                                                                        value="1167" data-toggle="modal"
                                                                        data-target="#myModalwithd{{ $loop->index + 1 }}">View</button>


                                                                        <button type="button"
                                                                        class="btn btn-sm btn-success btn-custom "
                                                                        value="1167" data-toggle="modal"
                                                                        data-target="{{$withdrawal->status > 0? "Completed":"#myModalpaid"}}{{ $loop->index + 1 }}">{{$withdrawal->status > 0? "Completed":"Mark Paid"}}</button>
                                            



                                                                    <button type="button"
                                                                        class="btn btn-sm btn-pink btn-custom "
                                                                        value="1167" data-toggle="modal"
                                                                        data-target="#myModalwithdel{{ $loop->index + 1 }}">Delete</button>
                                                                </td>




                                                                <!-- The Modal -->
                                                                <div class="modal fade"
                                                                    id="myModalwithd{{ $loop->index + 1 }}"
                                                                    role="dialog">
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
                                                                                                can Edit this a particular
                                                                                                withdrawal as you wish
                                                                                                below</small>
                                                                                            <form method="post"
                                                                                                action="{{ route('editwithdrawal') }}">
                                                                                                @csrf
                                                                                                <input type="text" hidden
                                                                                                    name="userid"
                                                                                                    value="{{ $user->id }}"
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
                                                                                                    <label>Withdrwal
                                                                                                        Date</label><br>
                                                                                                    <input typee="date"
                                                                                                        name="withdrawaldate"
                                                                                                        class="form-control"
                                                                                                        value="{{ $withdrawal->withdrawaltdate }}">
                                                                                                </div>
                                                                                                <div
                                                                                                    class="form-group">
                                                                                                    <label>Method</label><br>
                                                                                                    <input typee="text"
                                                                                                        name="method"
                                                                                                        class="form-control"
                                                                                                        value="{{ $withdrawal->method }}">
                                                                                                </div>

                                                                                                <div
                                                                                                    class="form-group">
                                                                                                    <label>Method
                                                                                                        Account</label><br>
                                                                                                    <input typee="text"
                                                                                                        name="methodaccount"
                                                                                                        class="form-control"
                                                                                                        value="{{ $withdrawal->methodaccount }}">
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
                <div class="row">
                    <div class="col-xl-8">
                        <div class="card">
                            <div class="card-header bg-info">
                                <h3 class="card-title text-white">Update Information</h3>
                            </div>
                            <div class="card-body">
                                <form method="post" action="{{ route('user_profile_update_by_admin') }}">
                                    @csrf
                                    <input type="text" name="id" hidden value="{{ $user->id }}" id="">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Full Name</label>
                                                <input type="text" class="form-control" name="name" placeholder="Name"
                                                    value="{{ $user->name }}">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="email" class="form-control" name="email"
                                                    placeholder="Email Address" value="{{ $user->email }}">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Maximum Daily Withdraw</label>
                                                <input type="number" value="{{ $fund->maximum }}" class="form-control"
                                                    name="maximum" placeholder="00000" value="0">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label>Minimum Daily Withdraw</label>
                                                <input type="number" value="{{ $fund->minimum }}" class="form-control"
                                                    name="minimum" placeholder="00000" value="0">
                                            </div>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="form-group">
                                                <label>Admin Message</label>
                                                <textarea type="text" rows="5" class="form-control" name="adminmessage"
                                                    placeholder="No Message">{{ $user->adminmessage }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="user_admin_update"
                                            class="btn btn-info waves-effect waves-light">Update Profile</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card">
                            <div class="card-header bg-warning">
                                <h3 class="card-title text-dark">Change Password</h3>
                            </div>
                            <div class="card-body">
                                <form method="post" action="{{ route('user_password_reset_by_admin') }}">
                                    @csrf
                                    <input type="text" name="id" readonly value="{{ $user->id }}" id="">
                                    <div class="form-group">
                                        <label>New Password</label> <em class="text-warning" style="font-size: 0.8rem;">
                                        </em>
                                        <input type="password" name="newpassword" class="form-control"
                                            placeholder="New Password">
                                    </div>
                                    <div class="form-group">
                                        <label>Retype New Password</label>
                                        <input type="password" name="cnewpassword" class="form-control"
                                            placeholder="Retype New Password">
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="update_user_password"
                                            class="btn btn-warning waves-effect waves-light">Update Password</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">












                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Add Deposit</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="table-responsive">
                                            <table id="datatable" class="table table-striped  table-bordered nowrap"
                                                style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Amount</th>
                                                        <th>Deposit Date</th>
                                                        <th>Account</th>
                                                        <th>Account address</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <form action="{{ route('admin_adddeposit') }}" method="post">
                                                            @csrf
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Full Name</label>
                                                                    <input type="text" class="form-control" required
                                                                        readonly name="name" placeholder="Name"
                                                                        value="{{ $user->name }}">
                                                                    <input type="text" hidden name="userid"
                                                                        value="{{ $user->id }}"
                                                                        class="tex">
                                                                    <input type="text" hidden name="email"
                                                                        value="{{ $user->email }}"
                                                                        class="tex">
                                                                    <input type="text" hidden name="name"
                                                                        value="{{ $user->name }}"
                                                                        class="tex">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Amount</label>
                                                                    <input type="number" required class="form-control"
                                                                        name="depositamount" placeholder="Amount" value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Date</label>
                                                                    <input type="Date" required class="form-control"
                                                                        name="depositdate" placeholder="Deposit Date"
                                                                        value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Account</label>
                                                                    <input type="text" required class="form-control"
                                                                        name="method"
                                                                        placeholder="Account, e.g Paypal,btc,eth" value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Account Address</label>
                                                                    <input type="text" required class="form-control"
                                                                        name="methodaddress"
                                                                        placeholder="e.g` btc address,paypaladdress"
                                                                        value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button type="submit"
                                                                    class="btn btn-sm btn-primary">Add</button>

                                                            </td>
                                                        </form>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>








                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-pink">
                                <h3 class="card-title text-white">Add Withdrawal</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="table-responsive">
                                            <table id="datatable" class="table table-striped  table-bordered nowrap"
                                                style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                <thead>
                                                    <tr>

                                                        <th>Name</th>
                                                        <th>Amount</th>
                                                        <th>Withdrawal Date</th>
                                                        <th>Account</th>
                                                        <th>Account address</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <form action="{{ route('admin_addwithdrawal') }}" method="post">
                                                            @csrf
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Full Name</label>
                                                                    <input type="text" class="form-control" readonly
                                                                        name="name" placeholder="Name"
                                                                        value="{{ $user->name }}">
                                                                    <input type="text" hidden name="userid"
                                                                        value="{{ $user->id }}"
                                                                        class="tex">

                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Amount</label>
                                                                    <input type="number" required class="form-control"
                                                                        name="amount" placeholder="Amount" value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Date</label>
                                                                    <input type="Date" required class="form-control"
                                                                        name="withdrawaldate" placeholder="Withdrawal Date"
                                                                        value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Account</label>
                                                                    <input type="text" required class="form-control"
                                                                        name="method"
                                                                        placeholder="Account, e.g Paypal,btc,eth" value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="form-group">
                                                                    <label>Account Address</label>
                                                                    <input type="text" required class="form-control"
                                                                        name="account"
                                                                        placeholder="e.g` btc address,paypaladdress"
                                                                        value="">
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <button type="submit"
                                                                    class="btn btn-sm btn-warning">Add</button>

                                                            </td>
                                                        </form>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{{-- 
make investment for a user --}}



<div class="row">

    <div class="col-lg-12">
        <div class="card">
            <div class="card-header bg-success">
                <h3 class="card-title text-white">Make Investment for {{ $user->name }}</h3>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-12">
                        <div class="table-responsive">

                            <div class="transfer-wraper">
                                <form action="{{ route('admin_make_investment_for_user') }}" method="post">
                                    @csrf
                                    <input type="text" hidden name="userid" id="" value="{{$user->id}}">
                                    <div class="form-group no-mb">
                                        <label class="form-label">select Plan</label>
                                        <span class="desc"></span>

                                        <select name="plan" class="form-control"
                                            aria-label="Select Plan"
                                            placeholder="select Investment Plan">
                                            
                                            @if ($investmentplans)
                                         
                                            @foreach ($investmentplans as $investmentplan)
                                            <option value="{{$investmentplan->name}}">{{$investmentplan->name}}</option>
                                                
                                            @endforeach
                                                
                                            @endif
                                            
                                          
                                        </select>

                                        <label class="form-label">Amount</label>
                                        <span class="desc"></span>

                                        <div class="input-group mb-10">
                                            <span class="input-group-addon">$</span>
                                            <input type="number" name="amount" class="form-control"
                                                aria-label="Amount (to the nearest dollar)"
                                                placeholder="enter amount">

                                        </div>

                                        <button type="submit"
                                            class="btn btn-primary btn-sm btn-rounded mt-20 has-gradient-to-right-bottom"
                                            style="width:100%"> make Investment for {{ $user->name }} </button>
                                    </div>
                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>













                    {{-- view investment --}}

                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header bg-success">
                                    <h3 class="card-title text-white">All {{ $user->name }} Investments</h3>
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
                                                            <th>Plan</th>
                                                            <th>Investment Date</th>
                                                            <th>Amount</th>
                                                            <th>Maturity Date</th>
                                                            <th>Profit</th>
                                                            <th>Status</th>
                                                            <th>View/Delete</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        @if ($investments)
                                                            @foreach ($investments as $investment)
                                                                <tr>
                                                                    <td>{{ $loop->index + 1 }}</td>
                                                                    <td>{{ $investment->investmentplan }}</td>
                                                                   
                                                                    <td>{{ Carbon\Carbon::parse($investment->investmentdate)->diffForHumans() }}
                                                                    </td>

                                                                    <td>$ {{ $investment->investmentamount }}</td>

                                                                    <td>$ {{ $investment->investmentmaturitydate }}</td>
                                                                    <td>{{$investment->investmentprofit}}</td>
                                                                    <td>{{ $investment->investmentStatus > 0 ? 'Complete' : 'Still Running' }}
                                                                    </td>
                                                                    <td>
                                                                        <button type="button"
                                                                            class="btn btn-sm btn-primary btn-custom "
                                                                            value="1167" data-toggle="modal"
                                                                            data-target="#myModalallinv{{ $loop->index + 1 }}">View</button>
    
                                                                        <button type="button"
                                                                            class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                            data-toggle="modal"
                                                                            data-target="#myModalallinvdel{{ $loop->index + 1 }}">Delete</button>
                                                                    </td>
    
    
    
    
                                                                    <!-- The Modal -->
                                                                    <div class="modal fade"
                                                                        id="myModalallinv{{ $loop->index + 1 }}" role="dialog">
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
                                                                                                    Investment</h3>
                                                                                            </div>
                                                                                            <ul class="list-group">
                                                                                                <li class="list-group-item">
                                                                                                    <span><b>User</b></span>
                                                                                                    <span
                                                                                                        class="float-right tx-primary">{{ $user->name }}</span>
                                                                                                </li>
                                                                                                <li class="list-group-item">
                                                                                                    <span><b>Amount</b></span>
                                                                                                    <span
                                                                                                        class="float-right tx-primary">$
                                                                                                        {{ $investment->investmentamount }}</span>
                                                                                                </li>
                                                                                                <li class="list-group-item">
                                                                                                    <span><b>Plan Name</b></span>
                                                                                                    <span
                                                                                                        class="float-right tx-primary">{{ $investment->investmentplan }}</span>
                                                                                                </li>
                                                                                                <li class="list-group-item">
                                                                                                    <span><b>Invested On</b></span> <span
                                                                                                        class="float-right tx-primary">{{ Carbon\Carbon::parse($investment->investmentdate)->diffForHumans() }}</span>
                                                                                                </li>
                                                                                                
                                                                                            </ul>
                                                                                            <div class="card-body">
                                                                                                <hr>
                                                                                                <div
                                                                                                    class="card-header bg-dark">
                                                                                                    <h3
                                                                                                        class="card-title text-white">
                                                                                                        Edit Investment</h3>
                                                                                                </div>
                                                                                                <small
                                                                                                    class="text-info">You
                                                                                                    can Edit this particular
                                                                                                    Investment as you wish
                                                                                                    below</small>
                                                                                                <form method="post"
                                                                                                    action="{{ route('editinvestment') }}">
                                                                                                    @csrf
                                                                                                    <input type="text" hidden
                                                                                                        name="userid"
                                                                                                        value="{{ $user->id }}"
                                                                                                        class="tex">
                                                                                                 
                                                                                                    <input name="id"
                                                                                                        type="hidden"
                                                                                                        value="{{ $investment->id }}">
                                                                                                    <div
                                                                                                        class="form-group">
                                                                                                        <label>Plan Name</label><br>
                                                                                                        <input type="text"
                                                                                                            name="investmentplan"
                                                                                                            class="form-control"
                                                                                                            value="{{ $investment->investmentplan }}">
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="form-group">
                                                                                                        <label>Plan Percent</label><br>
                                                                                                        <input type="text"
                                                                                                            name="investmentpercent"
                                                                                                            class="form-control"
                                                                                                            value="{{ $investment->investmentpercent }}">
                                                                                                    </div>
                                                                                                <div
                                                                                                    class="form-group">
                                                                                                    <label>Investment Date</label><br>
                                                                                                    <input type="date"
                                                                                                        name="investmentdate"
                                                                                                        class="form-control"
                                                                                                        value="{{ $investment->investmentdate }}">
                                                                                                </div>
                                                                                                <div
                                                                                                class="form-group">
                                                                                                <label>Investment duration</label><br>
                                                                                                <input type="text"
                                                                                                    name="investmentduration"
                                                                                                    class="form-control"
                                                                                                    value="{{ $investment->investmentduration }}">
                                                                                            </div>
                                                                                            <div
                                                                                            class="form-group">
                                                                                            <label>Investment Profit</label><br>
                                                                                            <input type="text"
                                                                                                name="investmentprofit"
                                                                                                class="form-control"
                                                                                                value="{{ $investment->investmentprofit }}">
                                                                                        </div>

                                                                                        <div
                                                                                            class="form-group">
                                                                                            <label>Investment Total Profit</label><br>
                                                                                            <input type="text"
                                                                                                name="investmenttotalprofit"
                                                                                                class="form-control"
                                                                                                value="{{ $investment->investmenttotalprofit }}">
                                                                                        </div>
                                                                                        
                                                                                        <div
                                                                                            class="form-group">
                                                                                            <label>Investment Maturity Date</label><br>
                                                                                            <input type="date"
                                                                                                name="investmentmaturitydate"
                                                                                                class="form-control"
                                                                                                value="{{ $investment->investmentmaturitydate }}">
                                                                                        </div>

                                                                                        
                                                                                        <div
                                                                                            class="form-group">
                                                                                            <label>Investment Amount</label><br>
                                                                                            <input type="text"
                                                                                                name="investmentamount"
                                                                                                class="form-control"
                                                                                                value="{{ $investment->investmentamount }}">
                                                                                        </div>


                                                                                        
                                                                                         <div
                                                                                            class="form-group">
                                                                                            <label>Investment Type</label><br>
                                                                                            <input type="text"
                                                                                                name="type"
                                                                                                class="form-control"
                                                                                                value="{{ $investment->type }}">
                                                                                        </div>
                                                                                        

                                                                                        
                                                                                        <div
                                                                                        class="form-group">
                                                                                        <label>Already Gotten Profit</label><br>
                                                                                        <input type="text"
                                                                                            name="gotteninvestmentprofit"
                                                                                            class="form-control"
                                                                                            value="{{ $investment->gotteninvestmentprofit }}">
                                                                                    </div>



                                                                                                    <div
                                                                                                        class="text-center">
                                                                                                        <button type="submit"
                                                                                                            name="up_am"
                                                                                                            class="btn btn-success waves-effect waves-light">Update Investment
                                                                                                            </button>
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
    
    
                                                                    <div id="myModalallinvdel{{ $loop->index + 1 }}"
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
                                                                                    <h4>Are you sure to delete this 
                                                                                        ${{ $user->name }} 
                                                                                        {{ $investment->investmentplan }} Investment plan ?</h4>
                                                                                </div>
                                                                                <div class="modal-footer no-border">
                                                                                    <button type="button"
                                                                                        class="btn btn-secondary waves-effect"
                                                                                        data-dismiss="modal">No</button>
                                                                                    <a href="{{ route('deleteinvestment', $investment->id) }}"
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








                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header bg-primary">
                                    <h3 class="card-title text-white">EDIT USER BALANCE</h3>
                                    <H6>please be careful with this</H6>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-12 col-sm-12 col-12">
                                            <div class="table-responsive">
                                                <table id="datatable2" class="table table-striped  table-bordered nowrap"
                                                    style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                    <thead>
                                                        <tr>
                                                            <th>Balance</th>
                                                            <th>Current Investment</th>
                                                            <th>Total Profit</th>
                                                            <th>Current Profit</th>
                                                            <th>action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <form action="{{ route('editbalance') }}" method="POST">
                                                            @csrf
                                                            <tr>
                                                                <td><input type="number" name="balance"
                                                                        value="{{ $fund->balance }}">
                                                                    <input type="text" name="userid" value="{{ $fund->userid }}" hidden id=""></td>

                                                                <td><input type="number" name="currentinvestment"
                                                                        value="{{ $fund->currentinvestment }}"> </td>

                                                                <td><input type="number" name="totalprofit"
                                                                        value="{{ $fund->totalprofit }}"> </td>

                                                                <td><input type="number" name="currentprofit"
                                                                        value="{{ $fund->currentprofit }}"> </td>
                                                                <td> <button type="submit"
                                                                        class="btn btn-primary btn-sm">Save</button>
                                                                </td>
                                                            </tr>
                                                        </form>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>









                        <div class="row">

                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-header bg-info">
                                        <h3 class="card-title text-white">{{ $user->name }} Referrals</h3>
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
                                                                <th>User Referred Name</th>
                                                                <th>User Referred email</th>
                                                                <th>Registration Date</th>
                                                        
                                                                <th>Mark as Paid/Delete</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            @if ($userrefs)
                                                                @foreach ($userrefs as $userref)
                                                                    <tr>
                                                                        <td>{{ $loop->index + 1 }}</td>
                                                                        <td>{{ $userref->newusername }}</td>
                                                                        <td>{{ $userref->newuseremail }}</td>
                                                                        <td>{{ Carbon\Carbon::parse($userref->created_at)->diffForHumans() }}
                                                                        </td>
                                                                        
                                                                        
                                                                        <td>
                                                                            <button type="button"
                                                                                class="btn btn-sm btn-primary btn-custom "
                                                                                value="1167" data-toggle="modal"
                                                                                data-target="{{$userref->status > 0?"#myModalpaid":"#myModalrefpay"}}{{ $loop->index + 1 }}">{{$userref->status > 0?"Paid Out":"Mark as Paid"}}</button>
        
                                                                            <button type="button"
                                                                                class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                                data-toggle="modal"
                                                                                data-target="#myModalrefdel{{ $loop->index + 1 }}">Delete</button>
                                                                        </td>
        
        
        
        
        






                                                                        <div id="myModalrefpay{{ $loop->index + 1 }}"
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
                                                                                        <h4>Mark this referral as paid ?</h4>
                                                                                    </div>
                                                                                    <div class="modal-footer no-border">
                                                                                        <button type="button"
                                                                                            class="btn btn-secondary waves-effect"
                                                                                            data-dismiss="modal">No</button>
                                                                                        <a href="{{ route('payreferral', $userref->refid) }}"
                                                                                            class="btn btn-pink waves-effect">Mark as paid</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>


                                                                        <div id="myModalrefdel{{ $loop->index + 1 }}"
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
                                                                                        <h4>Are you sure to delete this referral
                                                                                            
                                                                                             ?</h4>
                                                                                    </div>
                                                                                    <div class="modal-footer no-border">
                                                                                        <button type="button"
                                                                                            class="btn btn-secondary waves-effect"
                                                                                            data-dismiss="modal">No</button>
                                                                                        <a href="{{ route('delreferral', $userref->refid) }}"
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
                                                                                        <h4>This referral have been paid</h4>
                                                                                    </div>
                                                                                    <div class="modal-footer no-border">
                                                                                        <button type="button"
                                                                                            class="btn btn-secondary waves-effect"
                                                                                            data-dismiss="modal">Okay</button>
                                                                                        
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




                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Wallet Address</h3>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="table-responsive">
                                            <table id="datatable2" class="table table-striped  table-bordered nowrap"
                                                style="border-collapse: collapse; border-spacing: 0; width: 100%;">
                                                <thead>
                                                    <tr>
                                                        <th>SN</th>
                                                        <th>Type</th>
                                                        <th>Address</th>
                                                        <th>View/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
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
        <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
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
