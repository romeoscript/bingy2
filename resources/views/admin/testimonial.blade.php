@extends("adminlayout.adminlayout")
@section("body")



<div class="content-page">

    <div class="content">
    <div class="container-fluid">

    <div class="row">
    </div>


    <div id="usd" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">
    </div>

    <div id="del_tra" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none">

    </div>
    <button style="display: none;" type="button" id="show_tra" data-toggle="modal" data-target="#usd"></button>
    <button style="display: none;" type="button" id="show_del" data-toggle="modal" data-target="#del_tra"></button>

    <div class="row">
    <div class="col-xl-12">
    <div class="card">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">Create New Testimonial</h3>
    </div>
    <div class="card-body">

        {{-- form starts here --}}
        
    <form action="{{route("storeTestimonials")}}" method="POST" enctype="multipart/form-data">

        @csrf
        
    <div class="row">
    <div class="col-md-12">
    <div class="form-group">
    <label>Photo of User(optional)</label><em class='text-primary'> </em>
    <div class=" mt-3">
    <div>
    <span class="img-div">
    <div class="text-center img-placeholder" onClick="triggerClick('#getcatimage')" style="height: 200px; width: 200px;">
    </div>
    <img src="bingx/assets/choose.jpg" onClick="triggerClick('#getcatimage')" id="dispcatimage" class='profileDisplay' style="height: 200px; width: 200px;">
    </span>
    <input type="file" name="image" onChange="displayImage(this,'#dispcatimage')" id="getcatimage" class="form-control" style="display:none;">
    </div>
    </div>
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <label>Name Of User</label>
    <input type="text" class="form-control" name="name" placeholder="Name Of User">
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <label>Testimony</label>
    <textarea type="number" class="form-control" rows="5" name="message" placeholder="Write Testimony"></textarea>
    </div>
    </div>
    </div>
    <div class="text-center">
    <button type="submit" name="create_test" class="btn btn-primary waves-effect waves-light">Create Testimony</button>
    </div>
    </form>

    {{-- form ends here --}}

    </div>
    </div>
    </div>
    </div>
    <div class="row">

    <div class="col-lg-12">
    <div class="card">
    <div class="card-header bg-primary">
    <h3 class="card-title text-white">Testimonials</h3>
    </div>
    <div class="card-body">
    <div class="row">
    <div class="col-md-12 col-sm-12 col-12">
    <div class="table-responsive">
    <table id="datatable" class="table table-striped  table-bordered nowrap" style="border-collapse: collapse; border-spacing: 0; width: 100%;">
    <thead>
    <tr>
    <th>SN</th>
    <th>Name</th>
    <th>Testimony</th>
    <th>View/Delete</th>
    </tr>
    </thead>
    <tbody>


       
        @if ($testimonials)
        
        @foreach ($testimonials as $testimonial)

         {{-- Testimonials here --}}
        <tr>

        <td>{{ $loop->index + 1 }}</td>
        <td>{{ $testimonial->name }}</td>
        <td>{{ $testimonial->message }}</td>
        <td>
        <button type="button" class="btn btn-sm btn-primary btn-custom " value="4" onclick="show_settings_modal(2,this.value,'#usd','#show_tra')">View</button>
        <button type="button" class="btn btn-sm btn-pink btn-custom " value="4" onclick="show_del_settings(2,this.value,'#del_tra','#show_del')">Delete</button>
        </td>

        </tr>
        
    
        {{-- Testimonial end here --}}

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
        data:'hide_hint='+1,
        success: function(data){
            $().html(data);
        }
        });
    }
    </script>
    </div>


@endsection
