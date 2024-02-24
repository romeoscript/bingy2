
@extends('dashblayout.dashlayout')
@section('body')

<div class="card-header text-center"><h4>Active Referrals</h4></div>
<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
                <thead class="thead-light">
                    <tr>
                        <th class="border-0 rounded-start">#</th>
                        <th class="border-0">Name</th>
                        <th class="border-0">Reg Date</th>
                        <th class="border-0">Email</th>
                       
                    </tr>
                </thead>
                
                <tbody>
                    @if ($all_active_ref->count()>0)
                    @foreach ($all_active_ref as $ref)
                    <tr>
                        <td>
                          <a href="#" class="text-yellow hover-warning">
                            {{$loop->index + 1}}
                          </a>

                        </td>
                        <td>{{$ref->name}}</td>

                        <td>{{Carbon\Carbon::parse($ref->created_at)->diffForHumans()}}</td>

                        <td>{{$ref->email}}</td>

                      </tr>
                    @endforeach
                @else

                <tr>
                    <td colspan="4">
                        <h5 class="text-yellow hover-warning"> You have no referral, please share yout referral link to family and friends to earn referral bonus</h5>
                    </td>
                </tr>

                @endif


                </tbody>





            </table>
        </div>
    </div>
</div>



@endsection
