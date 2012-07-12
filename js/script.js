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
	$('#lets_talk').click(function(event) {
		event.preventDefault();
		scrollToID('#contact', 600);
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
/************************************** SLIDESHOW CYCLE **************************************/	

	
	$('.slideshow').each(function(i) {
		var p = this.parentNode;
			$(this).after('<div class="clearfix pager_right slide_nav slide_nav'+i+'">').cycle({
		    fx:     'fade', 
		    speed:  'fast', 
		    timeout: 0, 
		    pager:  '.slide_nav' + i
		});
	});
	
	$('.slideshow_vertical').each(function(i) {
		var p = this.parentNode;
			$(this).after('<div class="clearfix pager_right slide_nav slide_nav'+i+'">').cycle({
		    fx:     'fade', 
		    speed:  'fast', 
		    timeout: 0, 
		    pager:  '.slide_nav' + i
		});
	});
	

 });