$(document).ready(function () {
	var pageNumbers = $('.page-num');

	pageNumbers.each(function( index ){
		$(this).html(index+1);
	});

	$('.background img').attr('src',"img/border/vine-border.jpg");

	$('.pic img, .program img').click(function() {
		var url = $(this).attr('src');
		window.open(url);
		return false;
	});

	$('.font-toggle .fa').click(function(){
		$(this).toggleClass('fa-toggle-on fa-toggle-off');
		$('body').toggleClass('boring-font');
	});

	$('.font-toggle').exitButton({top: '-10px', right: '-10px', fontSize: '15px'});
	$('.info').exitButton({top: '-10px', right: '-10px', fontSize: '15px', onHover: false});
	$('.download').exitButton({top: '-5px', right: '-5px', fontSize: '10px'});
	$('.top').exitButton({top: '-5px', right: '-5px', fontSize: '10px'});
});
