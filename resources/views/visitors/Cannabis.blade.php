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
            <h1>Cannabis Investments</h1>
        </div>
    </div>
</section>
<section class="service-details">
    <div class="auto-container">
        <div class="row clearfix">




            <div class="col-lg-8 col-md-12 col-sm-12 content-side">
                <div class="service-details-content">
                    <div class="content-style-one">
                        <figure class="image-box"><img src="https://trustbunds.com/serv/2.png" alt=""></figure>
                        <div class="sec-title left">
                            <h5></h5>
                            <h2>Medical Cannabis</h2>
                        </div>
                        <div class="text">
                            <p>
                                For many years we have been working conscientiously
                                and with the most diverse technologies and means. We have constantly
                                successfully completed our projects.
                            </p>
                            <p>
                                We believe that the full benefits and potential of cannabis as a medical therapy are within our reach only
                                through supply chain transparency, an engaged and active network of cannabis users, and data that is consistently
                                available and verifiable for medical surveys and for developing and establishing therapies and life-prolonging
                                solutions and treatments on blockchain technology.
                                Our vision is one in which cannabis medical research gets the support it needs and deserves.
                            </p>
                        </div>
                        <h3>Cannabis Goals</h3>
                        <ul class="list-item clearfix">
                            <li>Understand the regulatory, legal, and technological needs and challenges of the medical cannabis industry</li>
                            <li>Continually advance the medical cannabis blockchain data ecosystem to medical studies</li>
                            <li>Establish strong vendor and partner relationships with technology firms, doctors, scientists, universities, and governments to ensure data integrity and value</li>
                            <li>Attract, hire, and retain highly qualified professionals to sell, manage, monitor, and service the various technological component parts and software systems required to support the ecosystem</li>
                            <li>Foster a social community online in which each member can participate freely and offer the breadth of their knowledge and experience</li>
                            <li>Provide a simple, secure, user-friendly global exchange platform for the stakeholders</li>
                            <li>Create billions of data points and hundreds of millions of dollars in transaction value</li>
                            <li>Establish supply-chain integrity</li>
                        </ul>
                    </div>
                </div>
            </div>







        </div>
    </div>
</section>

<!--section class="project-section">
        <div class="fluid-container">
            <div class="project-carousel theme-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
                <div class="project-block-one">
                    <div class="inner-box">
                        <figure class="image-box"><img src="assets/images/gallery/project-1.jpg" alt=""></figure>
                        <div class="lower-content">
                            <p>Corporate Management</p>
                            <h2><a href="index.html">Global Management Apps</a></h2>
                        </div>
                    </div>
                </div>
                <div class="project-block-one">
                    <div class="inner-box">
                        <figure class="image-box"><img src="assets/images/gallery/project-2.jpg" alt=""></figure>
                        <div class="lower-content">
                            <p>Financial Initiatives</p>
                            <h2><a href="index.html">Planning & Task Completion</a></h2>
                        </div>
                    </div>
                </div>
                <div class="project-block-one">
                    <div class="inner-box">
                        <figure class="image-box"><img src="assets/images/gallery/project-3.jpg" alt=""></figure>
                        <div class="lower-content">
                            <p>Corporate Management</p>
                            <h2><a href="index.html">Private Workshop Assistant</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section-->
</div>
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
<!-- cta-section end -->


@endsection