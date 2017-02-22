$(document).ready(function() {
	$('.introduction').show();
	$('.body').hide();
	$('#skiDiv, #elevationDiv, #bookDiv').hide();
	$('#enter').click(function() {
		$('.introduction').fadeOut("slow", "swing", function() {
			$('.body').fadeIn(1000, "swing");
		});
	});
	$('#backToCover').click(function() {
		$('.body').fadeOut("slow", "swing", function() {
			$('.introduction').fadeIn(1000, "swing");
		});
	});
	$('#ski, #elevation, #book').hover(function() {
		$(this).css('opacity', '0.2');
		$('#skiDiv').animate({marginLeft: "100px"}, 1000, "swing");
	}, function() {
		$(this).css('opacity', '1');
	});

});