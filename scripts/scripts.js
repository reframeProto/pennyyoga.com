$(document).ready(function(){
  $(window).scroll(function(){
    parallax();
    linkSwitching();
  });

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

  // Parallax Effect
  function parallax(){
    var wScroll = $(window).scrollTop();
    
    $('.showcase-outer').css('background-position', 'center '+(wScroll*0.5)+'px');
  }
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

  // MODAL

  // Modal Variables
  /* var modal1 = document.getElementById('hatha-modal');
  var modal2 = document.getElementById('mummys-modal');
  var modal3 = document.getElementById('therapy-modal');
  var modal4 = document.getElementById('younger-modal');
  var modal5 = document.getElementById('restorative-modal');
  var modal6 = document.getElementById('short-modal');
 
  var btn1 = document.getElementById('hathaYoga');
  var btn2 = document.getElementById('yogaMummys');
  var btn3 = document.getElementById('yogaTherapy');
  var btn4 = document.getElementById('youngerPeople');
  var btn5 = document.getElementById('restorativeYoga');
  var btn6 = document.getElementById('shortYoga');
 
  var close1 = document.getElementsByClassName("close1")[0];
  var close2 = document.getElementsByClassName("close2")[0];
  var close3 = document.getElementsByClassName("close3")[0];
  var close4 = document.getElementsByClassName("close4")[0];
  var close5 = document.getElementsByClassName("close5")[0];
  var close6 = document.getElementsByClassName("close6")[0]; 
  
  // Modal Functions

  btn1.onclick = function(){
    modal1.style.display = "block";
  };
  btn2.onclick = function(){
    modal2.style.display = "block";
  };
  btn3.onclick = function(){
    modal3.style.display = "block";
  };
  btn4.onclick = function(){
    modal4.style.display = "block";
  };
  btn5.onclick = function(){
    modal5.style.display = "block";
  };
  btn6.onclick = function(){
    modal6.style.display = "block";
  }; 

  close1.onclick = function(){
    modal1.style.display = "none";
  };
  close2.onclick = function(){
    modal2.style.display = "none";
  };
  close3.onclick = function(){
    modal3.style.display = "none";
  };
  close4.onclick = function(){
    modal4.style.display = "none";
  };
  close5.onclick = function(){
    modal5.style.display = "none";
  };
  close6.onclick = function(){
    modal6.style.display = "none";
  }; 
  window.onclick = function(event){
    if (event.target == modal1){
      modal1.style.display = "none";

    } else if (event.target == modal2){
      modal2.style.display = "none";
    } else if (event.target == modal3){
      modal3.style.display = "none";
    } else if (event.target == modal4){
      modal4.style.display = "none";
    } else if (event.target == modal5){
      modal5.style.display = "none";
    } else if (event.target == modal6){
      modal6.style.display = "none";
    } 
  }; */
});