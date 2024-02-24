@extends("adminlayout.adminlayout")
@section('body')
    <div class="content-page">

        <div class="content">
            <div class="container-fluid">

                <div class="row">
                </div>
                <div class="row">

                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">All Verifield Email Accounts</h3>
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
                                                        <th>Status</th>
                                                        <th>Email</th>
                                                        <th>Country</th>
                                                        <th>Available Balance</th>
                                                        <th>Total Balance</th>
                                                        <th>Investment Balance</th>
                                                        <th>Bonus</th>
                                                        <th>Current Profit</th>
                                                        <th>Total Profit</th>

                                                        <th>View</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @if ($users)
                                                        @foreach ($users as $user)
                                                        <tr>
                                                            <td>{{ $loop->index + 1 }}</td>
                                                            <td>
                                                                {!! $user->blocked > 0? "<span class='badge badge-danger'>Inactive</span></td>": "<span class='badge badge-success'>Active</span></td>" !!}

                                                            <td>{{ $user->email }}
                                                            </td>
                                                            <td>Not Available</td>

                                                            <td>${{ $user->balance }}</td>
                                                            <td>${{ $user->totalbalance }}</td>
                                                            <td>${{ $user->currentinvestment }}</td>
                                                            <td>${{ $user->bonus }}</td>
                                                            <td>${{ $user->currentprofit }}</td>
                                                            <td>${{ $user->totalprofit }}</td>

                                                            <td>
                                                                <button type="button"
                                                                class="btn btn-sm btn-primary btn-custom "
                                                                value="1167" data-toggle="modal"
                                                                data-target="#myModal{{ $loop->index + 1 }}">More</button>

                                                            
                                                              
                                                                <a href="{{route('account_view_user',$user->id)}}"
                                                                    class="btn btn-sm btn-primary btn-custom ">View</a>
                                                            </td>

                                                            
                                                            <!-- The Modal -->
                                                            <div class="modal fade"
                                                                id="myModal{{ $loop->index + 1 }}" role="dialog">
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
                                                                                            User Actions</h3>
                                                                                    </div>




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
                                                                                            <a href="{{ route('penalty_view_id', $user->id) }}" class="btn mt-4 btn-sm btn-warning waves-effect"
                                                                                                data-dismiss="modal">Penalty</a>
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
                                                                                                            <h4>Are you ready to {{$user->transfer >= 1 ? 'Deactivate' : 'Activate' }} Transfer
                                                                                                                for {{ $user->name }}?</h4>
                                                                                                        </div>
                                                                                                        <div class="modal-footer" style="border: 0;">
                                                                                                            <button type="button" class="btn btn-secondary waves-effect"
                                                                                                                data-dismiss="modal">No</button>
                                                                                                            <a href="{{ route($user->transfer >= 1 ? 'deactivate_fund_tranfer' : 'activate_fund_tranfer',$user->id) }}"
                                                                                                                class="btn btn-pink waves-effect">{{$user->transfer >= 1 ? 'Deactivate' : 'Activate' }}
                                                                                                                Transfer</a>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <button type="button"
                                                                                                class="btn mt-4 btn-sm btn-{{$user->transfer >= 1 ? 'pink' : 'primary' }} waves-effect waves-light"
                                                                                                data-toggle="modal" data-target="#trans437">{{$user->transfer >= 1 ? 'Deactivate' : 'Activate' }}
                                                                                                Transfer</button>
                                                                                        </div>
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
