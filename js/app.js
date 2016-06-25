$(document).ready(function() {
	$('.introduction').show();
	$('.body').hide();
	$('#enter').click(function() {
		$('.introduction').fadeOut("slow", "swing", function() {
			$('.body').fadeIn(1000, "swing");
		});
	});

});