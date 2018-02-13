var pictures = {  
    Empty: $('#picture-empty'),
    Edward: $('#picture-Edward'),
    Andrei: $('#picture-Andrei'),
    Dmitriy: $('#picture-Dmitriy'),
    Ilya: $('#picture-Ilya'),
    Mike: $('#picture-Mike'),
    Oleg: $('#picture-Oleg'),
    Michael: $('#picture-Michael'),
    Eugene: $('#picture-Eugene'),
    Ruslan: $('#picture-Ruslan'),
    Vladimir: $('#picture-Vladimir'),
    Valentina: $('#picture-Valentina')
  }

  var description = {
    team: $('#team-description'),
    Edward: $('#Edward-description'),
    Andrei: $('#Andrei-description'),
    Dmitriy: $('#Dmitriy-description'),
    Ilya: $('#Ilya-description'),
    Mike: $('#Mike-description'),
    Oleg: $('#Oleg-description'),
    Michael: $('#Michael-description'),
    Eugene: $('#Eugene-description'),
    Ruslan: $('#Ruslan-description'),
    Vladimir: $('#Vladimir-description'),
    Valentina: $('#Valentina-description')
  }

  var backgrounds = {
    total: $('.backgrounds-item'),
    Edward: $('#Edward-background'),
    Andrei: $('#Andrei-background'),
    Mike: $('#Mike-background'),
    Dmitriy: $('#Dmitriy-background'),
    Ilya: $('#Ilya-background'),
    Oleg: $('#Oleg-background'),
    Michael: $('#Michael-background'),
    Eugene: $('#Eugene-background'),
    Ruslan: $('#Ruslan-background'),
    Vladimir: $('#Vladimir-background'),
    Valentina: $('#Valentina-background')
  }

  var hexolinks = $('.member-picture');
  var bluehexes = $('.blue_polygons');
  var teamSection = $('.team');

  description.team.show();

  hexolinks.click(function () {
    bluehexes.fadeOut(800);
    teamSection.addClass('white');

  });

  pictures.Empty.click(function(e) {
    e.preventDefault();
    backgrounds.total.fadeOut(800);
    description.team.fadeIn(800).siblings().fadeOut(800)
    bluehexes.fadeIn(800);
    teamSection.removeClass('white')
  });

    function changeBg(a) {
      backgrounds.a.fadeIn(800).siblings().fadeOut(800);
      description.a.fadeIn(800).siblings().fadeOut(800);
    }

  pictures.Andrei.click(function(e) {
    e.preventDefault();
    backgrounds.Andrei.fadeIn(800).siblings().fadeOut(800);
    description.Andrei.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Edward.click(function(e) {
    e.preventDefault();
    backgrounds.Edward.fadeIn(800).siblings().fadeOut(800);
    description.Edward.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Dmitriy.click(function(e) {
    e.preventDefault();
    backgrounds.Dmitriy.fadeIn(800).siblings().fadeOut(800);
    description.Dmitriy.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Ilya.click(function(e) {
    e.preventDefault();
    backgrounds.Ilya.fadeIn(800).siblings().fadeOut(800);
    description.Ilya.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Mike.click(function(e) {
    e.preventDefault();
    backgrounds.Mike.fadeIn(800).siblings().fadeOut(800);
    description.Mike.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Oleg.click(function(e) {
    e.preventDefault();
    backgrounds.Oleg.fadeIn(800).siblings().fadeOut(800);
    description.Oleg.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Michael.click(function(e) {
    e.preventDefault();
    backgrounds.Michael.fadeIn(800).siblings().fadeOut(800);
    description.Michael.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Eugene.click(function(e) {
    e.preventDefault();
    backgrounds.Eugene.fadeIn(800).siblings().fadeOut(800);
    description.Eugene.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Ruslan.click(function(e) {
    e.preventDefault();
    backgrounds.Ruslan.fadeIn(800).siblings().fadeOut(800);
    description.Ruslan.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Vladimir.click(function(e) {
    e.preventDefault();
    backgrounds.Vladimir.fadeIn(800).siblings().fadeOut(800);
    description.Vladimir.fadeIn(800).siblings().fadeOut(800);
  });
  pictures.Valentina.click(function(e) {
    e.preventDefault();
    backgrounds.Valentina.fadeIn(800).siblings().fadeOut(800);
    description.Valentina.fadeIn(800).siblings().fadeOut(800);
  });
  

  $(window).scroll(function() {
    var st = $(this).scrollTop();

    backgrounds.total.css({ transform: 'translate(0px, -' + st/3 +'px)'});
  });