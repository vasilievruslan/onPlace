//= bx-slider.js

// jquery.onepage-scroll.js

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
      $(window).scroll(function() {
        var st = $(this).scrollTop();
        backgrounds.total.css({ transform: 'translate(0px, 0px)'});
      });
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
$(function() {

  $('window').scroll(function () {
    $("html").animate({ scrollTop: $(document).height() }, 1000);
    console.log(scrollTop());
    
  })
  
  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { 
              return false;
            } else {
              $target.attr('tabindex','-1');
              $target.focus();
            };
          });
        }
      }
    });

	var $sidebar = $('.sidebar');
	var $navbar = $('.navbar__links');
  var $navbarContainer = $('.navbar')
	var $burger = $('#burger');
	var $linkItem = $('.links__item');
  var $sidebarlayout = $('.sidebarlayout');


	$sidebar.click(function() {
		$navbar.toggleClass('--visible');
		$sidebar.toggleClass('--on');
		$burger.toggleClass('close').toggleClass('opened');
  });
  $navbarContainer.siblings().click(function() {
    $navbar.removeClass('--visible');
    $sidebar.removeClass('--on');
    $burger.addClass('close').removeClass('opened');
  });



	// pop-up

	var $whitePapper = $('#show-pop-up');
  var $whitePapperBtn = $('.wpbtn-footer');
	var $overlay = $('.cover');
  var $closeBtn = $('.close-button');
	var $popUpWhitepapper = $('.whitepapper');
  var $feedback = $('#show-feedback');
  var $popUpFeedback = $('.feedback-wrap');
  var $closeSpace = $('.space-close');
  var $qrWeChat = $('#qr-wechat');
  var $linkWeChat = $('#link-wechat');
  var $feedbackLinks = $('.feedback-ico');

  $qrWeChat.hide().click(function() {
    $qrWeChat.fadeToggle(600);
    $feedbackLinks.delay(600).fadeToggle(400);
  });
  $linkWeChat.click(function(e) {
    e.preventDefault();
    $qrWeChat.delay(400).fadeToggle(600);
    $feedbackLinks.fadeToggle(400);
  });


  $feedback.click(function(e) {
    e.preventDefault();
    $popUpFeedback.fadeToggle('400');
    $feedback.toggleClass('white');
    $closeSpace.toggle(400);
  });


  $closeSpace.click(function() {
    $popUpFeedback.fadeOut(400);
    $feedback.removeClass('white');
    $closeSpace.hide();
  });



  $whitePapper.click(function(event) {
    event.preventDefault();
    $overlay.fadeIn(400);
    $popUpWhitepapper.fadeIn(400);
  });

  $whitePapperBtn.click(function(event) {
    event.preventDefault();
    $overlay.fadeIn(400);
    $popUpWhitepapper.fadeIn(400);
  });


	$closeBtn.click(function() {
		$overlay.fadeOut(400);
		$popUpWhitepapper.fadeOut(400);
	});
	$overlay.click(function() {
		$overlay.fadeOut(400);
		$popUpWhitepapper.fadeOut(400);
	});


 // Language switch

  var $langItem = $('a.lang')
  var $eng = $('#lang-us');
  var $cn = $('#lang-cn');
  var $ind = $('#lang-in');

  var $langBtn = $('.langswitch-wrap');
  var $langSwitch = $('.langswitch');
  var $langSwitchCarusel = $('.langswitch-carusel');

  $langBtn.click(function() {
    $langSwitch.toggle(400);
    $('.links__item').toggleClass('hided');
  });

  $langSwitchCarusel.bxSlider({
    auto: true,
    controls: false,
    pause: 2000,
    pager: false,
    touchEnabled: false
  })



 // video pop-up


  var $popUpVideoContainer = $(".pop-up-video");
  var $popUpVideoBtn = $('#play-video-eng-btn');
  var $popUpVideoCnBtn = $('#play-video-cn-btn');


  $popUpVideoBtn.click(function() {
      $popUpVideoContainer.append('<iframe id="video" src="https://www.youtube.com/embed/p1YiDKlSe8k?rel=0&autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      $popUpVideoContainer.fadeIn(700);
  });

  $popUpVideoCnBtn.click(function() {
      $popUpVideoContainer.append('<video id="video" controls autoplay><source src="http://onplace.io/img/video/onplace-china-subtitle.mp4" type="video/mp4"/></video>');
      $popUpVideoContainer.fadeIn(700);
  })

  $('.close-button-video').click(function(e) {
    var $video = $('#video');
    var $videoScreen = $('#video-pop-up');
    
    e.preventDefault();
    $popUpVideoContainer.hide(700);
    $videoScreen.remove();
    $video.remove();

  });

  $('.partners-carousel').bxSlider({
    auto: true,
    controls: false,
    pause: 3000,
    pager: false
  })

  // main team page 

  //= teampage.js

  $('.card-back-wrap').hide();
  $('.advisor-item').click(function() {
    $(this).children('.flip-card').children('.card-back-wrap').slideToggle(400);
  });

  $('.attantion-alert').click(function() {
    $('.attantion-alert').fadeOut(400);
  });
  $('#close-alert').click(function (e) {
    e.preventDefault()
    $('.attantion-alert').fadeOut(400);
  });
});