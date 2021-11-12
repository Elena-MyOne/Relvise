$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(function() {
	$(window).on("scroll", function() {
		 if($(window).scrollTop() > 50) {
			  $(".header").addClass("changeBgc");
		 } else {
			 $(".header").removeClass("changeBgc");
		 }
	});
});