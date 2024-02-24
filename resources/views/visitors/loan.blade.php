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


<!-- START SECTION BANNER -->
<section class="page-title centred" style="background-image: url(assets/images/background/page-title.jpg);">
	<div class="auto-container">
		<div class="content-box clearfix">
			<ul class="bread-crumb clearfix">
				<li><a href="/"></a></li>
			</ul>
			<h1>Loan</h1>                
		</div>
	</div>
</section>
<section class="about-style-two about-page-1 bg-color-1">
	<div class="auto-container">
		<div class="row clearfix">
			<div class="col-lg-7 col-md-12 col-sm-12 content-column">
				<div id="content_block_three">
					<div class="content-box">
						<div class="sec-title right">
							<h2>Get A Loan</h2>
						</div>
						<div class="text">
							<p>Getting a loan doesn’t have to be intimidating, with the right lender it can be
						   a simple process. You only need a lender committed to taking the mystery out of the mortgage loan 
						   process! At , we understand! Our investors want simple facts, honest answers
						   and competitive products.

DGS automatically offers loan services to investors with over $50,000 investment either in our normal  financial

Services packages or the NFP plans. Investors over $50,000 are entitled to loans of $200,000-1millon dollars yearly with 5% 
paid monthly, or the investor could wish to compound the interest till the time limit, provided all required information and 
identity of the investor are duly confirmed by  loan board.

Every investor above $50,000 is provided with a personal account manager and the investor has a direct communication with 
the manager in order to see that our loan offers are secured.

GREAT INVESTING WITH  FAMILY</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-5 col-md-12 col-sm-12 image-column">
				<div id="image_block_two">
					<div class="image-box">
						<div class="pattern-layer" style="background-image: url(assets/images/shape/shape-25.png);"></div>
						<figure class="image"><img src="https://trustbunds.com/assets/images/resource/about-2.jpg" alt=""></figure>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- END SECTION BLOG -->
<!--section class="clients-section">
	<div class="auto-container">
		<div class="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
			<figure class="client-logo"><a href="index.html"><img src="assets/images/clients/clients-1.png" alt=""></a></figure>
			<figure class="client-logo"><a href="index.html"><img src="assets/images/clients/clients-2.png" alt=""></a></figure>
			<figure class="client-logo"><a href="index.html"><img src="assets/images/clients/clients-3.png" alt=""></a></figure>
			<figure class="client-logo"><a href="index.html"><img src="assets/images/clients/clients-4.png" alt=""></a></figure>
			<figure class="client-logo"><a href="index.html"><img src="assets/images/clients/clients-5.png" alt=""></a></figure>
		</div>
	</div>
</section-->


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