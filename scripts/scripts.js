$(document).ready(function(){
  // Smooth Scrolling
  var scrollLink = $('.scroll');
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - $('.header-container').outerHeight()
    }, 1500);
  });
    // Nav-Icon Animation
  $('#nav-icon').click(function(){
    $('.site-nav').toggleClass('site-nav--open', 400);
    $(this).toggleClass('open');
  });
  // Link Switching
  function linkSwitching(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top -140;
      if (sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('activelink');
        $(this).parent().siblings().removeClass('activelink');
      }
    });
  }
  $(window).scroll(function(){
    linkSwitching();
  });

});