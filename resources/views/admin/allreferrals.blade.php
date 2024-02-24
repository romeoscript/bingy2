@extends("adminlayout.adminlayout")
@section("body")






<div class="content-page">

    <div class="content">
        <div class="container-fluid">

            <div class="row">
            </div>



            <div class="row">

                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header bg-info">
                            <h3 class="card-title text-white">All Referrals</h3>
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
                                                    <th>Referred By Name</th>
                                                    <th>Referred By Email</th>
                                            
                                                    <th>Mark as Paid/Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @if ($allrefs)
                                                    @foreach ($allrefs as $userref)
                                                        <tr>
                                                            <td>{{ $loop->index + 1 }}</td>
                                                            <td>{{ $userref->name }}</td>
                                                            <td>$ {{ $userref->email }}</td>
                                                            <td>{{ Carbon\Carbon::parse($userref->created_at)->diffForHumans() }}
                                                            </td>
                                                            <td>{{ $userref->oldusername }}</td>
                                                            <td>{{ $userref->olduseremail}}</td>
                                                            
                                                            <td>
                                                                <button type="button"
                                                                    class="btn btn-sm btn-primary btn-custom "
                                                                    value="1167" data-toggle="modal"
                                                                    data-target="{{$userref->refstatus > 0?"#myModalpaid":"#myModalrefpay"}}{{ $loop->index + 1 }}">{{$userref->refstatus > 0?"Paid Out":"Mark as Paid"}}</button>

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
