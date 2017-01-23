$(document).ready(function(){

	//
	var speed = 500; // this is miliseconds, half a second, fade speed
	var autoswitch = true;  // auto slider options
	var autoswith_speed = 4000; // auto slider speed

	// add initial active class

	$('.slide').first().addClass('active');

	// Hide all slides

	$('.slide').hide();

	// Show first slide

	$('.active').show();


	//onclick event for next arrow
	$('#next').on('click', nextSlide)

	$('#prev').on('click', prevSlide)

	if(autoswitch === true){
		setInterval(nextSlide,autoswith_speed)
	}

	// Switch to next Slide function
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else{
			 $('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	// Switch to previous slide function
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');

		} else{
			 $('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);// body...
	}

});