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
                                <h3 class="card-title text-white">All Accounts</h3>
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
                                                                    class="btn btn-sm btn-success btn-custom "
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

                                                                                                    <a href="{{ route('sendemailid', $user->id) }}" class="btn mt-4 btn-sm btn-warning waves-effect"
                                                                                                        data-dismiss="modal">Send Mail</a>
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













    {{-- <div class="container">
<!-- DATA TABLE-->
<section class="p-t-20">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title-5 m-b-35">data table</h3>
                <div class="table-data__tool">
                    <div class="table-data__tool-left">
                        <div class="rs-select2--light rs-select2--md">
                            <select class="js-select2" name="property">
                                <option selected="selected">All Properties</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                        <div class="rs-select2--light rs-select2--sm">
                            <select class="js-select2" name="time">
                                <option selected="selected">Today</option>
                                <option value="">3 Days</option>
                                <option value="">1 Week</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                        <button class="au-btn-filter">
                            <i class="zmdi zmdi-filter-list"></i>filters</button>
                    </div>
                    <div class="table-data__tool-right">
                        <button class="au-btn au-btn-icon au-btn--green au-btn--small">
                            <i class="zmdi zmdi-plus"></i>add item</button>
                        <div class="rs-select2--dark rs-select2--sm rs-select2--dark2">
                            <select class="js-select2" name="type">
                                <option selected="selected">Export</option>
                                <option value="">Option 1</option>
                                <option value="">Option 2</option>
                            </select>
                            <div class="dropDownSelect2"></div>
                        </div>
                    </div>
                </div>

                <div class="table-responsive table-responsive-data2">

                    <div class="card-header">
                        <strong>USERS</strong>

                    </div>


                    <table class="table">
                        <thead>
                            <tr>
                                <th>


                                        <span class="">ID</span>

                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            @if ($users)
                            @foreach ($users as $user)
                                        <tr class="tr-shadow">
                                <td>
                                    <label class="">

                                        <span class="">{{$loop->index + 1}}</span>
                                    </label>
                                </td>
                                <td>{{$user->name}}</td>
                                <td>
                                    <span class="desc">{{$user->email}}</span>
                                </td>

                                <td>{{$user->phone}}</td>

                                <td>
                                    <div class="table-data-feature">

                                        <button class="item" data-toggle="tooltip" data-placement="top" title="view user in detail">
                                            <a href="{{route('account_view_user',$user->id)}}"><i class="zmdi zmdi-account"></i></a>
                                        </button>

                                        <button class="item" data-toggle="tooltip" data-placement="top" title="Delete user">
                                            <a href="{{route('adminuserdelete',$user->id )}}"><i class="zmdi zmdi-delete"></i></a>
                                        </button>
                                        @if ($user->blocked == 0)
                                         <button class='item' data-toggle='tooltip' data-placement='top' title='click to block user'>
                                            <a href='{{route("adminblock",$user->id )}}'><i class='zmdi zmdi-shield-security'></i></a>
                                        </button>
                                    @else
                                        <button class='item' data-toggle='tooltip' data-placement='top' title='click to unblock user'>
                                            <a href='{{route("adminunblock",$user->id )}}'><i class='zmdi zmdi-shield-check'></i></a>
                                        </button>
                                    @endif
                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Add user to top earners">
                                        <a href="{{route('addtopearners',$user->id )}}"><i class="zmdi zmdi-plus"></i></a>
                                    </button>

                                    </div>
                                </td>
                            </tr>
                            <tr class="spacer"></tr>

                            @endforeach
                            {{ $users->onEachSide(6)->links() }}
                            @endif

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
</div> --}}
    <!-- END DATA TABLE-->

@endsection
