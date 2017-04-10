$(document).ready(function() {
	$('#profile').click(function() {
		console.log('click');
		$('body').animate({scrollTop: 50},800);
	});

	$('#projects').click(function() {
		$('body').animate({scrollTop: 500},800);
	});
});