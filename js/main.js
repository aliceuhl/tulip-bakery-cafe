$(document).ready()

// smooth page scroll to to anchor (from https://css-tricks.com/snippets/jquery/smooth-scrolling/)
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});


//sticky navigation on scroll for desktop breakpoints
$(function(){
var windowBottom = $(window).scrollTop() + $(window).height();
var bottomView = 700;
	$(window).scroll(function(){
		
		if ($(this).scrollTop() >= bottomView ){
			$('nav').addClass('nav__sticky');
		}
		else{
			$('nav').removeClass('nav__sticky');
		}
	});
});



//Navicon Animation and slide Nav for mobile and tablet
$(function(){
	var $navicon = $('.navicon');
	var $navLink = $('.slide--nav__right');
	$navicon.click(function(){
		$('.navicon-line').toggleClass('x-open');		
			if ($('.navicon-line').hasClass('x-open')){	
				$('.slide--nav').animate({right: '0px'}, 350);	
				$('body').animate({right: '250px'}, 200)
			return;
			}

			else {
				$('.slide--nav').animate({right: '-250px'}, 350);	
				$('body').animate({right: '0px'}, 200)
			return;
		}
	return true;		
	});
});//end navicon animation and slide nav.

//Close Slide Menu with window click.
$(window).on("click", function(e) {
    if (
      wrapper.hasClass("nav-open") && 
      !$(e.target).parents(nav).hasClass("side-nav") && 
      !$(e.target).hasClass("toggle")
    ) {
        wrapper.removeClass("nav-open");
      }
  });

//Menu Items: Savory, Sweet, Drinks - show/hide menu items.
$(function(){
	var $savoryMenu = $('.item--savory');
	var $sweetMenu = $('.item--sweet');
	var $drinkMenu = $('.item--drink');
		
		$('.sweet').click(function(){
			$sweetMenu.show(400);
			$drinkMenu.hide(400);	
			$savoryMenu.hide(400);	
		});	
		$('.savory').click(function(){
			$savoryMenu.show(400);
			$drinkMenu.hide(400);	
			$sweetMenu.hide(400);			
		});
		$('.drink').click(function(){
			$drinkMenu.show(400);
			$sweetMenu.hide(400);	
			$savoryMenu.hide(400);		
		});
});


