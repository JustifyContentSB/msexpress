$(function() { 
	$('.language__item').on('click', function(event) {
		event.preventDefault();
		$('.language').addClass('none');
		$('.testing.start').addClass('show');
	});

	$('.start .testing__btn').on('click', function(event) {
		event.preventDefault();
		$('.start').removeClass('show');
		$('.testing.traveller').addClass('show');
	});

	$('.traveller .testing__btn').on('click', function(event) {
		event.preventDefault();
		$('.traveller').removeClass('show');
		$('.testing.assay').addClass('show');
	});
});