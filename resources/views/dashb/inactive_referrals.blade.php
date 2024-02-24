
@extends('dashblayout.dashlayout')
@section('body')


<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
                <thead class="thead-light">
                          </tr>
                        </thead>
                        <tbody>
                        @if ($all_inactive_ref->count()>0)
                                @foreach ($all_inactive_ref as $ref)
                                <tr>
                                    <td>
                                      <a href="#" class="text-yellow hover-warning">
                                        {{$loop->index + 1}}
                                      </a>

                                    </td>
                                    <td>{{$all_inactive_ref->name}}</td>

                                    <td>{{$all_inactive_ref->email}}</td>

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
              
@endsection()





