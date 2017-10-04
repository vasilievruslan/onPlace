$(function() {
	var switcher = $("a.--switcher");
	var airpalne = $("div.plane-fly");
	var sidebar = $('.sidebar');
	var navbar = $('.navbar__links');
	var burger = $('#burger');
	var linkItem = $('.links__item');

	var whitePaper = $('#show-pop-up');

	switcher.click(function() {
		airpalne.addClass("--active")
	});

	sidebar.click(function() {
		navbar.toggleClass('--visible');
		sidebar.toggleClass('--on');
		burger.toggleClass('close').toggleClass('opened');
	});
	

	// pop-up



	whitePaper.click(function(e) {
		e.preventDefault();

		$('.pop-up').fadeIn(1000);

		$('#overlay').addClass('blur-in');

	});

	$('.close-button').click(function (e) { 

		$('.pop-up').fadeOut(700);
		$('#overlay').removeClass('blur-in');
		
		e.stopPropagation();

	});
});