$(document).ready(()=>{
	$('.slide').slick({
  	    dots: false,
    	infinite: true,
    	speed: 300,
    	cssEase: 'ease-in',
    	nextArrow: $('.next'),
    	prevArrow: $('.prev')
	});

	$('.temoin__slide').slick({
  	  dots: false,
    	infinite: true,
    	speed: 300,
    	cssEase: 'ease-in',
    	nextArrow: $('.nextTemoin'),
    	prevArrow: $('.prevTemoin')
	});

    // toggle menu
	$('.toggle-btn').click( () => {
		$('#menu').stop().slideToggle();
	})

    if(screen.width < 890){
        $('.nav__list--link').click( () => {
        $('#menu').slideToggle();
    })
    }

	// Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

		
})

const allImages = document.querySelectorAll('img');

allImages.forEach( image => {
  if(!image.classList.contains('no-loading'))
  {
    image.setAttribute('loading', 'lazy');
  }
})

