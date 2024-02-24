@extends("layouts.customlayout")

@section('body')




	<!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
	<section class="fxt-template-animation fxt-template-layout10" style="width: 80%;margin: 30px auto;border-radius: 10px;box-shadow: 0 12px 30px 0 rgba(0, 0, 0, 0.2), 0 12px 30px 0 rgba(0, 0, 0, 0.19);">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-6 col-12 order-md-1 fxt-bg-img" data-bg-image="temp/img/figure/test.png">
					<div class="fxt-header">
						<a href="{{route('index')}}" class="fxt-logo">
							<h2 style="font-size: 4em;color: #24248f;font-weight: 800;color: #24248f;text-shadow: 3px 3px 5px #fff;letter-spacing: 2px!important;">bingx-finance</h2>
							<!-- <img src="images/logotosend.png" style="width: 400px;"> -->
						</a>
						<!-- <h1>Welcome To xmee</h1> -->
						<p style="font-size: 2em;">Explore the world's top performing auto-trading with ease...</p>

						<a href="{{route('login')}}" class="fxt-btn-ghost">Log In</a>
					</div>
				</div>
				<div class="col-md-6 col-12 order-md-2 fxt-bg-color">
					<div class="fxt-content">
						<div class="fxt-form">
							<h2 style="color: #fff;">Create an account</h2>
							<form method="POST" action="{{ route('register') }}">
                                @csrf
                                <input type="text" hidden name="refid" value="@php
                                        if (isset($_GET['refid'])) {
                                            echo $_GET['refid'];
                                        }
                                    @endphp" id="">
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-3">
										<input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" placeholder="Name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
									</div>
								</div>
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-3">
                                        <input id="email" type="email" placeholder="Email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror									</div>
								</div>
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-4">
                                        <input id="phone" type="phone" placeholder="Phone Number" class="form-control" name="phone" required autocomplete="phone">
									</div>
								</div>
                                <div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-4">
                                        <input id="password" type="password" placeholder="Password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
										<i toggle="#password" class="fa fa-fw fa-eye toggle-password field-icon"></i>
									</div>
								</div>
                                <div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-4">
                                        <input id="password-confirm" type="password" class="form-control" placeholder="Confirm Password" name="password_confirmation" required autocomplete="new-password">
									</div>
								</div>

								<!-- <div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-3">
										<div class="fxt-checkbox-area">
											<div class="checkbox">
												<input id="checkbox1" type="checkbox">
												<label for="checkbox1">Keep me logged in</label>
											</div>
										</div>
									</div>
								</div> -->
								<div class="form-group">
									<div class="fxt-transformY-50 fxt-transition-delay-5">
										<div class="text-center">
											<button type="submit" class="fxt-btn-ghost"> {{ __('Register') }}</button>
										</div>
									</div>
								</div>
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




















{{--


<div class="container" style="margin-top: 23%">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="phone" class="col-md-4 col-form-label text-md-right">{{ __('Phone') }}</label>

                            <div class="col-md-6">
                                <input id="phone" type="phone" class="form-control" name="phone" required autocomplete="phone">
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
