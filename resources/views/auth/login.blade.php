@extends("layouts.customlayout")
@section('body')
@include('nav')
<!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
	<section class="fxt-template-animation fxt-template-layout10" style="width: 80%;margin: 30px auto;border-radius: 10px;box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 col-12 order-md-1 fxt-bg-img" data-bg-image="temp/img/figure/test.png">
					<div class="fxt-header">
						<a href="{{route('index')}}" class="fxt-logo">
							<h2 style="font-size: 4em;color: #24248f;font-weight: 800;color: #24248f;text-shadow: 3px 3px 5px #fff;letter-spacing: 2px!important;">bingx-finance </h2>
							<!-- <img src="images/logotosend.png" style="width: 400px;"> -->
						</a>
						<!-- <h1>Welcome To xmee</h1> -->
						<p style="font-size: 2em;">Explore the world's top performing auto-trading with ease...</p>

						<a href="{{route('register')}}" class="fxt-btn-ghost">Sign Up</a>
					</div>
				</div>
				<div class="col-md-6 col-12 order-md-2 fxt-bg-color">
					<div class="fxt-content">
						<div class="fxt-form">
							<h2 style="color: #fff;">LOGIN</h2>
							<form method="POST" action="{{ route('login') }}">
                                @csrf
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-3">
                                        <input id="email" placeholder="Email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
									</div>
								</div>
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-4">
										<input id="password" placeholder="Password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
										<i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i>
									</div>
								</div>
                                <div class="form-group row">
                                    <div class="col-md-6 offset-md-4">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                            <label class="form-check-label" for="remember">
                                                {{ __('Remember Me') }}
                                            </label>
                                        </div>
                                    </div>
                                </div>



                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="fxt-btn-ghost">
                                            {{ __('Login') }}
                                        </button>

                                        @if (Route::has('password.request'))
                                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                                {{ __('Forgot Your Password?') }}
                                            </a>
                                        @endif
                                    </div>
                                </div>



								{{-- <div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-5">
										<div class="text-center">
											<button type="submit" class="fxt-btn-ghost">Login</button>
										</div>
									</div>
								</div> --}}
							</form>
						</div>
						<div class="fxt-footer">
                            <p>Connect with us on</p>
							<ul class="fxt-socials">
								<li class="fxt-facebook fxt-transformY-50 fxt-transition-delay-6">
									<a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
								</li>
								<li class="fxt-twitter fxt-transformY-50 fxt-transition-delay-7">
									<a href="#" title="twitter"><i class="fab fa-twitter"></i></a>
								</li>
								<li class="fxt-google fxt-transformY-50 fxt-transition-delay-8">
									<a href="#" title="google"><i class="fab fa-google-plus-g"></i></a>
								</li>
								<li class="fxt-linkedin fxt-transformY-50 fxt-transition-delay-9">
									<a href="#" title="linkedin"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<!-- <li class="fxt-pinterest fxt-transformY-50 fxt-transition-delay-9">
									<a href="#" title="pinterest"><i class="fab fa-pinterest-p"></i></a>
								</li> -->
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- jquery-->
	<script src="temp/js/jquery-3.5.0.min.js"></script>
	<!-- Popper js -->
	<script src="temp/js/popper.min.js"></script>
	<!-- Bootstrap js -->
	<script src="temp/js/bootstrap.min.js"></script>
	<!-- Imagesloaded js -->
	<script src="temp/js/imagesloaded.pkgd.min.js"></script>
	<!-- Validator js -->
	<script src="temp/js/validator.min.js"></script>
	<!-- Custom Js -->
	<script src="temp/js/main.js"></script>

{{-- @section("body")
<div class="container" style="margin-top: 23%">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Login') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}

@endsection
