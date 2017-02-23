$(document).ready(function() {
	$('#enter').click(function() {
		$('.intro').animate({scrollTop: 775},800);
	});

	$('#backToTop').click(function() {
		$('.intro').animate({scrollTop: 0},800);
	});
});