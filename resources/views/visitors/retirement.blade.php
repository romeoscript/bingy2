@extends('layouts.spacedcustomlayout')

<style>
    body,
    html {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .hero-section {
        width: 100%;
        height: 50vh;
        background-size: cover;
        animation: backgroundChange 30s infinite;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .hero-content h1 {
        color: #ffffff;
        font-size: 2.5rem;
    }

    .hero-content p {
        color: #dddddd;
        font-size: 1.2rem;
    }

    .get-started-btn {
        text-decoration: none;
        color: #fff;
        background-color: #007bff;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s;
    }

    .get-started-btn:hover {
        background-color: #0056b3;
    }

    @keyframes backgroundChange {
        0% {
            background-image: url('https://images.unsplash.com/photo-1480213854112-77b3eb8fd3c0?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }

        33% {
            background-image: url('https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }

        67% {
            background-image: url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }

        100% {
            background-image: url('https://images.unsplash.com/photo-1606189934846-a527add8a77b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        }
    }
</style>
<link href="https://trustbunds.com/assets/css/font-awesome-all.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/flaticon.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/owl.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/bootstrap.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/jquery.fancybox.min.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/animate.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/color.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/rtl.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/style.css" rel="stylesheet">
<link href="https://trustbunds.com/assets/css/responsive.css" rel="stylesheet">


@section('body')


<section class="page-title centred" style="background-image: url(assets/images/background/page-title.jpg);">
    <div class="auto-container">
        <div class="content-box clearfix">
            <ul class="bread-crumb clearfix">
                <li><a href="/"></a></li>
            </ul>
            <h1>Retirement Planning</h1>
        </div>
    </div>
</section>
<section class="service-details">
    <div class="auto-container">
        <div class="row clearfix">

            <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                <div class="service-details-content">
                    <div class="content-style-one">
                        <figure class="image-box"><img src="https://trustbunds.com/serv/1.jpg" alt=""></figure>
                        <div class="sec-title left">
                            <h5></h5>
                            <h2>Workforce Optimization</h2>
                        </div>
                        <div class="text">
                            <p>
                                Saving for retirement can be a daunting task, but with a sound strategy, it’s well within reach. is here to
                                bring clarity to retirement
                                planning and set you on your path to success. Here you’ll better understand your options and find the right investment.
                            </p>
                            <p>
                                If you had the chance to double—or even quadruple—your retirement savings, you’d probably jump at that opportunity,
                                right? Well, there’s one simple change you can make today that’s sure to boost your retirement savings.
                            </p>
                        </div>

                        <div class="sec-title left">
                            <h3>Quadruple Your Retirement Savings? Really?</h3>
                        </div>
                        <div class="text">
                            <p>
                                study of worldwide retirement saving habits
                                discovered that people with some kind of retirement plan have more than three times
                                as much in their nest egg than those with no plan at all.

                                And savers who take it one step further by working with an investing advisor to put their plan
                                to paper? Their average nest egg is a whopping 445% bigger than non-planners. That’s a big deal!

                                Now, did you catch that? By working with an advisor and by having a plan in place, you can supercharge
                                your retirement savings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="auto-container">
        <div class="inner-container clearfix">
            <div class="title pull-left">
                <h2>Open account for free and start investing!</h2>
            </div>
            <div class="btn-box pull-right">
                <a href="{{route('register')}}">Get Started</a>
            </div>
        </div>
    </div>
</section>

@endsection