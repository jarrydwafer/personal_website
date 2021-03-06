// JAVASCRIPT

//
//
// Let's get it started
$(document).ready(function() {
  window.setTimeout(function() {
    $('body').addClass('comeatmebruh');
  }, 1000);

  //
  //
  // Fixed header nav

  var didScroll;
  var lastScrollTop = 0;
  var delta = 100;
  var navbarHeight = $('.fixed-header').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta)
      return;
    // if current position > last position AND scrolled past navbar
    if (st > lastScrollTop && st > navbarHeight){
      // Header scroll down
      $('.fixed-header').removeClass('nav-down').addClass('nav-up');
    } else {
      if(st + $(window).height() < $(document).height()) {
        $('.fixed-header').removeClass('nav-up').addClass('nav-down').css('border-top', '0');
        $('body.post').addClass('top-spacing');
      }
    }

    lastScrollTop = st;
  }

  //
  //
  // Contact Module

  var $menuWrap = $('#contact-menu-wrap'),
  		$body = $('body'),
  		$close = $('#close'),
  		$menuLink = $('.contact-page-link');

  function showOverlay() {
    $body.addClass('menu-on');
    $menuWrap.addClass('visible').addClass('opacity');
    setTimeout(function() {
      $close.addClass('on');
    }, 200);
  }

  function hideOverlay() {
    $body.removeClass('menu-on');
    $menuWrap.removeClass('opacity');
    setTimeout(function() {
      $close.removeClass('on');
      $menuWrap.removeClass('visible');
    }, 350);
  }

  $menuLink.on('click', function(e) {
    e.preventDefault();
    showOverlay();
  });

  $close.on('click', function(e) {
    e.preventDefault();
    hideOverlay();
  });

  // Mobile MENU
  $('.menu-icon').on('click', function(e) {
    // e.preventDefault();
    $('.mobile-menu').addClass('menu--visible');
  });
  $('.app-menu-close, .contact').on('click', function(e) {
    $('.mobile-menu').removeClass('menu--visible');
  });

});

//
//
// Hero image opacity change
$(window).on('scroll', function () {
  var hero = $('.blog-hero');
  var height = hero.outerHeight();
  var scrollTop = $(this).scrollTop();
  var rangeOffset = 160;
  var calc = 1 - scrollTop / (height - rangeOffset);

  hero.css({
    'opacity': calc
  });
  if (calc > '1'){
    hero.css({
      'opacity': 1
    });
  } else if (calc < '0'){
    hero.css({
      'opacity': 0
    });
  }
});

//
//
// Function to start with page nav down
select = function(s) {
  return document.querySelector(s);
};
var addHeader = function() {
  var header = select('.fixed-header');
  var postBody = select('.post');

  header.classList.remove('nav-up');
  header.classList.add('nav-down');
}
