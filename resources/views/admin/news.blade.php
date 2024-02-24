@extends("adminlayout.adminlayout")
@section("body")
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

<script>


tinymce.init({
  selector: 'textarea#default'
});


  </script>

  <!-- MAIN CONTENT-->
  <div class="main-content">
    <div class="section__content section__content--p30">
        <div class="container-fluid">
            <div style="margin-bottom: 1px">
                @include("flash-message")
                <h1>NEWS MANAGEMENT</h1>
            </div>
            {{-- news --}}
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">News</div>
                        <div class="card-body">

                            <form action="{{ route("savenews") }}" method="post" novalidate="novalidate">

                                @csrf
                                <div class="form-group">
                                    <label for="cc-payment" class="control-label mb-1">News Title</label>
                                    <input id="about" name="newstitle" type="text" class="form-control" aria-required="true" aria-invalid="false" value="">
                                </div>
                                <div class="form-group has-success">
                                    <label for="cc-name" class="control-label mb-1">News Content</label>
                                    <textarea id="default" name="newscontent"  cols="15" value="" rows="13">

                                    </textarea>

                                    {{-- <textarea style="background-color: rgb(137, 204, 243)" name="" id="" cols="40" rows="30"></textarea> --}}
                                    <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                                </div>


                                <div>
                                    <button id="payment-button" type="submit" class="btn btn-lg btn-info btn-block">
                                        <i class="fa fa-pen fa-lg"></i>&nbsp;
                                       <span>Post</span>

                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>




        </div>



        @if(isset($newsposts))
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">Edit-Published-News</div>


                    @foreach ($newsposts as $newspost)


                    <div class="card-body">

                        <form action="{{ route("editnews") }}" method="post" novalidate="novalidate">
                            @csrf

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">News Title</label>
                                <input id="about" name="newstitle" type="text" class="form-control" aria-required="true" aria-invalid="false" value="{{ $newspost->newstitle }}">
                            </div>
                            <div class="form-group has-success">
                                <label for="cc-name" class="control-label mb-1">News Content</label>
                                <input type="text" id="id" value="{{$newspost->id}}">
                                <textarea id="default" name="newscontent"  cols="15" value="" rows="13">
                                    {{ $newspost->newscontent}}
                                </textarea>

                                {{-- <textarea style="background-color: rgb(137, 204, 243)" name="" id="" cols="40" rows="30"></textarea> --}}
                                <span class="help-block field-validation-valid" data-valmsg-for="cc-name" data-valmsg-replace="true"></span>
                            </div>


                            <div>
                                <div>

                                    <button type="submit"  class="btn btn-success" >Update</button>
                                </form>

                                </div>

                                 </div>

                                 <div style="text-align: center">
                                    <a href="{{route('deletenews',$newspost->id)}}">
                                        <button  class="btn btn-danger" >Delete</button>
                                    </a>
                                </div>

                    </div>

                    @endforeach
                </div>
            </div>




    </div>
    @endif





    </div>
</div>
  </div>

@endsection
