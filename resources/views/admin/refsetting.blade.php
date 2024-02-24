@extends("adminlayout.adminlayout")
@section("body")

<div class="container">
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
                        <strong>Refferal Settings</strong>

                    </div>

<div class="table table-responsive">

    <table class="table" style="background-color: rgb(226, 215, 215)">
        <thead>
            <tr>

                <th>First Referral</th>
                <th>Second Referral</th>
                <th>Third Referral</th>
                <th>CHANGE</th>

            </tr>

        </thead>
        <tbody> <form action="{{route('post_referral_setting')}}" method="post">
                    @csrf
                    <tr class="tr-shadow">
                        <td>
                            <input type="text" name="firstref" value="{{$referral ? $referral->firstref :'Not set'}}" id=""></td>
                        <td>
                            <span class="desc"><input type="text" value="{{$referral ? $referral->secondref :'Not set'}}" name="secondref" id=""></span>
                        </td>

                        <td><input type="text" name="thirdref" id="" value="{{$referral? $referral->thirdref :'Not set'}}"></td>

                        <td>
                            <button type="submit" class="btn btn-primary">change</button>
                        </td>
                    </tr>
                </form>
                <tr class="spacer"></tr>

        </tbody>
    </table>


</div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
<!-- END DATA TABLE-->

@endsection
