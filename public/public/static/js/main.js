(function($){
	"use strict";

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Others Option For Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Search Menu JS
	$(".others-option .search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		margin: 5,
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});
	$('.home-slides-two').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoHeight: true,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Testimonials Slides
	$('.testimonials-slides, .feedback-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		items: 1,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Team Slides
	$('.team-slides').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 4,
			}
		}
	});

	// Portfolio Slides
	$('.portfolio-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1200: {
				items: 4,
			}
		}
	});

	// Accordion JS
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Article Image Slides
	$('.article-image-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		]
	});

	// Nice Select JS
	$('select').niceSelect();

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Count Time 
	function makeTimer() {
		var endTime = new Date("September 20, 2021 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 0);

	// Sidebar Sticky
	$('.portfolio-sidebar-sticky').stickySidebar({
		topSpacing: 85,
		bottomSpacing: 85
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='flaticon-back'></i>",
			"<i class='flaticon-chevron'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

}(jQuery));