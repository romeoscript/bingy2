@extends('layouts.spacedcustomlayout')

@section('body')

<section class="header6 cid-stnArzRaJ1" id="header6-1o" style="background-image: url('assets/images/background15.jpg')">

    

    <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(0, 0, 0);"></div>

    <div class="align-center container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
                <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-2 mt-4 display-1"><strong>Financial Market </h1>
                
                <p class="mbr-text mbr-white mbr-fonts-style display-7">
                    A marketplace that provides an avenue for the sale and purchase of assets such as bonds, stocks, foreign exchange, and derivatives
                </p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4 mb-5" href="{{route('register')}}">Invest Today </a></div>
            </div>
        </div>
    </div>
</section>


<section class="features15 cid-st9Vg8Xhek" id="features16-v">

    

    
    <div class="container">
        <div class="content-wrapper">
            <div class="row align-items-center">
                <div class="col-12 col-lg">
                    <div class="text-wrapper">
                        <h6 class="card-title mbr-fonts-style display-2">
                            <strong>
                                We're here to guide you through the financial market.</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style mb-4 display-4">
                            Financial markets exist to bring people together so money flows to where it is needed most. They can provide an opportunity for you to invest money in shares to build up money for the future. Financial markets also provide finance for companies so they can hire, invest and grow.
                            <br><br>

                            In the financial markets, stock prices, share prices, bond prices, currency rates, interest rates and dividends go up and down, creating risk. This risk is curtailed when you invest with Bingx Finance and you can have more wealth and time for the things that matter.
                        </p>
                        <div class="mbr-section-btn mt-3">
                            <a class="btn btn-primary display-4" href="{{route('services')}}">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <img src="bingx/assets/images/financial.jpg" alt="Mobirise">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
