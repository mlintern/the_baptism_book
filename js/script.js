$(document).ready(function(){
	pageNumbers = $('.page-num');

	pageNumbers.each(function( index ){
		$(this).html(index+1);
	});

	$('.background img').attr('src',"img/border/vine-border.jpg");

	$('.pic img').click(function() {
		url = $(this).attr('src')
		window.open(url);
  	return false;
	});
});