$(function() {
	var switcher = $("a.--switcher");
	var airpalne = $("div.plane-fly");
	var sidebar = $('.sidebar');
	var navbar = $('.navbar__links');
	var burger = $('#burger');
	var linkItem = $('.links__item');

	switcher.click(function() {
		airpalne.addClass("--active")
	});

	sidebar.click(function() {
		navbar.toggleClass('--visible');
		sidebar.toggleClass('--on');
		burger.toggleClass('close').toggleClass('opened');
	});
	
});