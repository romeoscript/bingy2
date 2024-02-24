<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>bingx-finance Auth</title>
    <link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Fontawesome CSS -->
	  <link rel="stylesheet" href="{{asset('temp/css/fontawesome-all.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">



    <link rel="stylesheet" href="{{asset('temp/css/bootstrap.min.css')}}">
	<!-- Fontawesome CSS -->
	<link rel="stylesheet" href="{{asset('temp/css/fontawesome-all.min.css')}}">
	<!-- Flaticon CSS -->
	<link rel="stylesheet" href="{{asset('temp/font/flaticon.css')}}">
	<!-- Google Web Fonts -->
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
	<!-- Custom CSS -->
	<link rel="stylesheet" href="{{asset('temp/style.css')}}">

  <!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = '32c7dd8526cbe92474f7940dae3afe59897e5bf5';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
<noscript> Powered by <a href=“https://www.smartsupp.com” target=“_blank”>Smartsupp</a></noscript>
  </head>
  <body>



@yield('body')

<section id="seventh">
    <style>
     #seventh {
            padding: 30px 0;
            background-color: #050514;
            color: #fff;
            min-height: 70vh;
        }
        #seventh .row1 {
            width: 80%;
            margin: auto;
        }
        #seventh .row1 .col-md-4 {
            margin: 40px 0 25px;
        }
        #seventh .row1 h3 {
            font-size: 2em;
            text-transform: capitalize;
            font-weight: 800;
            border-bottom: 1px solid #050514;
            padding-bottom: 20px;
            color: #fff;
        }
        #seventh .row1 h5 {
            font-size: 1.5em;
            text-transform: capitalize;
            font-weight: 500;
            text-align: center;
            padding: 15px 0;
        }
        #seventh .row1 input, #seventh .row1 textarea, #seventh .row1 button {
            background-color: #050514;
            color: #fff;
            border: 1px solid #ebebfa;
        }
        #seventh .links {
            padding: 25px 0 0 0;
            width: 50%;
            margin: auto;
        }
        #seventh .links a {
            display: block;
            font-size: 1.2em!important;
            text-transform: capitalize!important;
            font-weight: 400!important;
            text-align: left!important;
            color: #fff!important;
            padding-bottom: 5px!important;
            margin-bottom: 5px;
            text-decoration: none;
        }
        #seventh .contacts {
            padding: 25px 0 0 0;
            width: 80%;
            margin: auto;
        }
        #seventh .contacts p {
            font-weight: 400;
            text-align: left;
            color: #fff;
            padding-bottom: 5px;
        }
        #copyright {
            text-align: center;
            background-color: #050514;

            padding: 10px;
        }
        #copyright p{
            color: #fff!important;
        }
        @media (max-width: 991px){
            #seventh #links {
                display: none;
            }
        }
    </style>
    <div class="container">
     <div class="row text-center row1">
      <div class="col-md-4">
       <h3 class="white">
        Contact Us
       </h3>
       <h5 style="color: #fff!important;">
        Send Us A Message
       </h5>
       <form id="contactform" method="POST" action="{{route('postcontact')}}">
                @csrf
              <div class="mb-3">
                <input type="text" name="name" class="form-control" placeholder="Name" required>
              </div>
              <div class="mb-3">
                <input type="email" name="email" class="form-control" placeholder="Email">
              </div>
              <div class="mb-3">
                <textarea class="form-control" name="message" rows="4" cols="10" placeholder="Message"></textarea>
              </div>
              <button type="submit" class="btn d-md-flex">Send</button>
            </form>
      </div>
      <div class="col-md-4" id="links">
       <h3 class="white">
        Sitemap
       </h3>
       <div class="links">
        <a href="{{route('index')}}">
         Home
        </a>
        <a href="{{route('about')}}">
         About Us
        </a>
        <a href="{{route('invest')}}">
         Invest
        </a>
        <a href="{{route('blog')}}">
         Blog
        </a>
        <a href="{{route('faq')}}">
         FAQ
        </a>
        <a href="{{route('login')}}">
         Login
        </a>
        <a href="{{route('register')}}">
         Sign Up
        </a>
       </div>
      </div>
      <div class="col-md-4">
       <img alt="website logo" height="40" src="logo.png" width="100"/>
       <h3>
       </h3>
       <div class="contacts">
        


       
      </div>
      </div>
     </div>
    </div>
   </section>
  
  <div class="container-fluid" id="copyright">
    <p>Copyright &copy; 2021 All Rights Reserved Diverse Climax</p>
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  <script src="./js/script.js"></script>
</body>
</html>
