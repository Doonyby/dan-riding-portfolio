$(document).ready(function() {
	$('#profile').click(function() {
		$(".aboutMe").velocity("scroll", 800);
	});

	$('#projects').click(function() {
		$(".projects").velocity("scroll", 800);
	});

	$('#contact').click(function() {
		$("footer").velocity("scroll", 800);
	});
});