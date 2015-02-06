$(document).ready(function(){
	pageNumbers = $('.page-num');

	pageNumbers.each(function( index ){
		$(this).html(index+1);
	});

	$('.background img').attr('src',"img/border/vine-border.jpg");

	$('.pic img, .program img').click(function() {
		url = $(this).attr('src')
		window.open(url);
		return false;
	});

	$(".exit").click(function () { 
		$(".info").hide();
	});

	$('.font-toggle').click(function(){
		$(this).find('i').toggleClass('fa-toggle-on fa-toggle-off');
		$('body').toggleClass('boring-font');
	});
});