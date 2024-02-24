@extends('dashblayout.dashlayout')
@section('body')


<div class="card-header text-center"><h4>All deposits</h4></div>

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
                       {{-- for each $userdeposits as $deposits --}}

                       @if ($userdeposits)

                       @foreach ($userdeposits as $deposit)

                            <!-- Item -->
                   <tr>
                       <td><a href="#" class="text-primary fw-bold"> {{$loop->index + 1}} </a> </td>

                       <td class="text-success">
                           <div class="d-flex align-items-center">
                               <span class="fw-bold">{{$deposit->amount}}</span>
                           </div>
                       </td>

                       <td class="fw-bold d-flex align-items-center">
                           {{$deposit->depositDate}}
                       </td>
                       
                       <td class="text-success">
                           <div class="d-flex align-items-center">
                               <span class="fw-bold">{{$deposit->method}}</span>
                           </div>
                       </td>
                      
                       <td class="text-success">
                           <div class="d-flex align-items-center">
                               <span class="fw-bold">{{$deposit->methodAccount}}</span>
                           </div>
                       </td>

                       <td class="text-success">
                           <div class="d-flex align-items-center">
                    {!! $deposit->status > 0? "<span class='fw-bold'>Completed</span></td>": "<span class='fw-bold'>Pending</span></td>" !!}
                               {{-- <span class="fw-bold">Completed</span> --}}
                           </div>
                       </td>
                   </tr>
                   <!-- End of Item -->
                           
                       @endforeach
                       
                   @else

                  
                       
                   @endif
                 
                  
                </tbody>
            </table>
        </div>
    </div>
</div>








@endsection
