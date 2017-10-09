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
	

	// pop-up

	var whitePaper = $('#show-pop-up');
	var overlay = $('.cover'),
		closeBtn = $('.close-button'),
		popUp = $('.pop-up');

	whitePaper.click(function(event) {
		event.preventDefault();
		overlay.fadeIn(700);
		popUp.fadeIn(1000);
	});

	closeBtn.click(function() {
		overlay.fadeOut(1000);
		popUp.fadeOut(1000);
	});
	overlay.click(function() {
		overlay.fadeOut(1000);
		popUp.fadeOut(1000);
	});

		
	// Roadmap



	var hex1 = $('g#hex1');	
	var hex2 = $('g#hex2');	
	var hex3 = $('g#hex3');	
	var hex4 = $('g#hex4');	
	var hex5 = $('g#hex5');	
	var hex6 = $('g#hex6');	
	var hex7 = $('g#hex7');	
	var hex8 = $('g#hex8');	
	var hex9 = $('g#hex9');
	var hex10 = $('g#hex10');

	var hexagone = $('.hexogon');
	var lineConnect = $('.line');
	var textPoints = $('g.text');

	var roadmap = $('.roadmap');

	lineConnect.hide();
	textPoints.hide();
	hexagone.click(function() {
		roadmap.addClass('step1');
		setTimeout(function () {
			roadmap.addClass('step2');
		}, 1200);
		setTimeout(function () {
			lineConnect.fadeIn('1000');
			textPoints.delay(1000).fadeIn('400');
		},2000)
	});


});