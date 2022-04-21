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
		
})
