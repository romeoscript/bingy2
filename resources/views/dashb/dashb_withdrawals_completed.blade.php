@extends('dashblayout.dashlayout')
@section('body')

<div class="card-header text-center"><h4>Completed Withdrawals</h4></div>

<div class="card border-0 shadow mb-4">
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
                <thead class="thead-light">
                    <tr>
                        <th class="border-0 rounded-start">#</th>
                        <th class="border-0">Amount</th>
                        <th class="border-0">Deposit Date</th>
                        <th class="border-0">Method</th>
                        <th class="border-0">Address</th>
                        <th class="border-0">Status</th>
                        
                    </tr>
                </thead>
                
                <tbody>
                    @if ($completedWithdrawals)
                    @foreach ($completedWithdrawals as $withdrawal )

                    <tr>
                        <td>{{$loop->index + 1}}</td>
                        
                        <td>$ {{$withdrawal->amount}}</td>
                        <td>{{Carbon\Carbon::parse($withdrawal->withdrawaltdate)->diffForHumans()}}</td>
                        <td>{{$withdrawal->method}}</td>
                        <td>{{$withdrawal->methodaccount}}
                            <td> {!! $withdrawal->status > 0? "<span class='fw-bold'>Completed</span></td>": "<span class='fw-bold'>Pending</span></td>" !!}</td>

                        </td>
                     
                    </tr>

                    @endforeach

                    @endif


                </tbody>





            </table>
        </div>
    </div>
</div>





@endsection


