@extends("adminlayout.adminlayout")
@section('body')
    <div class="content-page">

        <div class="content">
            <div class="container-fluid">

                <div class="row">
                </div>

</button>

                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header bg-primary">
                                <h3 class="card-title text-white">Create New FAQ</h3>
                            </div>
                            <div class="card-body">
                                <form method="post" action="{{route('faqs_save')}}">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Question</label>
                                                <input type="text" class="form-control" name="question"
                                                    placeholder="Question">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Answer</label>
                                                <textarea type="number" class="form-control" rows="5" name="answer"
                                                    placeholder="Write Answer"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" name="create_faq"
                                            class="btn btn-primary waves-effect waves-light">Create FAQ</button>
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
                                <h3 class="card-title text-white">Frequently Asked Questions</h3>
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
                                                        <th>Question</th>
                                                        <th>Answer</th>
                                                        <th>View/Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @if ($faqs)

                                                    @foreach ($faqs as $faq )
                                                    <tr>
                                                        <td>{{$loop->index + 1}}</td>
                                                        <td>{{$faq->question}}</td>
                                                        <td>{{$faq->answer}}</td>
                                                        <td>
                                                            <button type="button"
                                                            class="btn btn-sm btn-primary btn-custom "
                                                            value="1167" data-toggle="modal"
                                                            data-target="#myModalwithview{{ $loop->index + 1 }}">View</button>



                                                                <button type="button"
                                                                class="btn btn-sm btn-pink btn-custom " value="1167"
                                                                data-toggle="modal"
                                                                data-target="#myModalfaqdel{{ $loop->index + 1 }}">Delete</button>
                                                      
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
                                                Faq</h3>
                                        </div>
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <span><b>Question</b></span>
                                                <span
                                                    class="float-right tx-primary">{{ $faq->question }}</span>
                                            </li>
                                            <li class="list-group-item">
                                                <span><b>Answer</b></span>
                                                <span
                                                    class="float-right tx-primary">
                                                    {{ $faq->answer }}</span>
                                            </li>
                                           
                                        </ul>
                                        <div class="card-body">
                                            <hr>
                                            <div
                                                class="card-header bg-dark">
                                                <h3
                                                    class="card-title text-white">
                                                    Edit Faq</h3>
                                            </div>
                                            <small
                                                class="text-info">You
                                                can Edit this particular
                                                Faq as you wish
                                                below</small>
                                            <form method="post"
                                                action="{{ route('faqs_edit') }}">
                                                @csrf
                                                
                                                
                                                <input name="id"
                                                    type="hidden"
                                                    value="{{ $faq->id }}">
                                                <div
                                                    class="form-group">
                                                    <label>Question</label><br>
                                                    <input type="text"
                                                        name="question"
                                                        class="form-control"
                                                        value="{{ $faq->question }}">
                                                </div>
                                                <div
                                                    class="form-group">
                                                    <label>Answerr</label><br>
                                                    <input type="text"
                                                        name="answer"
                                                        class="form-control"
                                                        value="{{ $faq->answer }}">
                                                </div>
                                               

                                                <div
                                                    class="text-center">
                                                    <button type="submit"
                                                        name="up_am"
                                                        class="btn btn-success waves-effect waves-light">Update
                                                        FAQ</button>
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


                <div id="myModalfaqdel{{ $loop->index + 1 }}"
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
                                <h4>Are you sure to delete this Faq
                                </h4>
                            </div>
                            <div class="modal-footer no-border">
                                <button type="button"
                                    class="btn btn-secondary waves-effect"
                                    data-dismiss="modal">No</button>
                                <a href="{{ route('faqs_delete', $faq->id) }}"
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
                        <strong>FREQUENTLY-ASKED-QUESTIONS</strong>

                    </div>


                    <table class="table">
                        <thead>
                            <tr>
                                <th>


                                        <span class="">ID</span>

                                </th>
                                <th>QUESTION</th>

                                <th>ANSWER</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if ($faqs)
                                @foreach ($faqs as $faq)
                                <tr class="tr-shadow">
                                    <form action="" method="post">
                                        <td>
                                            <label class="">

                                                <span class="">1</span>
                                            </label>
                                            <input type="text" name="id" value="{{$faq->id}}">
                                        </td>
                                        <td><textarea name="question" value=""  id="" cols="30" rows="5">
                                            {{$faq->question}}
                                        </textarea></td>


                                        <td class="desc"><textarea name="answer" values="" id="" cols="30" rows="5">
                                            {{$faq->answer}}                                    </textarea>
                                        </td>

                                        <td>
                                            <div class="table-data-feature">

                                                <button class="item" type="submit" data-toggle="tooltip" data-placement="top" title="save changes">
                                                    <i class="zmdi zmdi-border-color"></i>
                                                </button>
                                                <a href="{{route("deletefaqs",$faq->id)}}">
                                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </button>
                                                </a>

                                            </div>
                                        </td>
                                    </form>
                                </tr>
                                <tr class="spacer"></tr>
                                @endforeach
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
