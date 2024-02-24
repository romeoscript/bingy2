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
                                <h3 class="card-title text-white">Messages</h3>
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
                                                        <th>Subject</th>
                                                        <th>Message</th>
                                                        <th>Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @if (isset($mails))
                                                        @foreach ($mails as $email)
                                                            @php
                                                                $header = imap_headerinfo($stream, $email);
                                                                $header->date;
                                                                $header->subject;
                                                                $from = $header->from;
                                                                foreach ($from as $id => $object) {
                                                                    $fromname = $object->personal;
                                                                    $fromaddress = $object->mailbox . '@' . $object->host;
                                                                }
                                                                $emailbody = imap_body($stream, $email);
                                                            @endphp





                                                            <tr>
                                                                <td>{{$loop->index + 1}}</td>
                                                                <td>{{$fromname}}</td>
                                                                <td><a href="/">{{$fromaddress}}</a>
                                                                </td>
                                                                <td>{{ $header->subject}}</td>
                                                                <td>{{$emailbody }}</td>
                                                                <td>
                                                                    <div id="d83" class="modal fade" tabindex="-1"
                                                                        role="dialog"
                                                                        aria-labelledby="full-width-modalLabel"
                                                                        aria-hidden="true" style="display: none">
                                                                        <div class="modal-dialog modal-full">
                                                                            <div class="modal-content">
                                                                                <div class="">
                                                                                    <button type="button"
                                                                                        class="close"
                                                                                        data-dismiss="modal"
                                                                                        aria-label="Close">
                                                                                        <span
                                                                                            aria-hidden="true">&times;</span>
                                                                                    </button>
                                                                                </div>
                                                                                <div class="modal-body">
                                                                                    <h4>Are you ready to delete this
                                                                                        message?</h4>
                                                                                </div>
                                                                                <div class="modal-footer">
                                                                                    <button type="button"
                                                                                        class="btn btn-secondary waves-effect"
                                                                                        data-dismiss="modal">No</button>
                                                                                    <a href="?d=vjSikEQ2z98360278cJR0f"
                                                                                        class="btn btn-pink waves-effect">Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <button type="button"
                                                                        class="btn btn-pink waves-effect btn-sm waves-light"
                                                                        data-toggle="modal"
                                                                        data-target="#d83">Delete</button>
                                                                </td>
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
