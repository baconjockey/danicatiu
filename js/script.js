$(document).ready(function() {

/************************************** JUMP TO A SECTION **************************************/
	function scrollToID(id, speed){
		var offSet = 70;
		var targetOffset = $(id).offset().top-offSet;
		$('html,body').animate({scrollTop:targetOffset}, speed);
	}
	//navigation click actions	
	$('#about_nav').click(function(event) {
		event.preventDefault();
		scrollToID('#about', 600);
	});	
	$('#work_nav').click(function(event) {
		event.preventDefault();
		scrollToID('#work', 600);
	});
	$('#play_nav').click(function(event) {
		event.preventDefault();
		scrollToID('#play', 600);
	});
	$('#contact_nav').click(function(event) {
		event.preventDefault();
		scrollToID('#contact', 600);
	});

 });