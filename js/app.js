$(document).ready(function() {
	$("#landingName").animate({marginLeft: '0px'}, 1500);
	$("#landingTitle").animate({marginLeft: '0px'}, 2000);
	$("#landingCity").animate({marginLeft: '0px'}, 2500);
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