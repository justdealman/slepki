function nav() {
	var scale = $('.wrapper').width()/1920;
	$('.lc').css({
		'-webkit-transform': 'scale('+scale+')',
		'transform': 'scale('+scale+')'
	});
	$('.content').css({
		'min-height': $('.lc').height()*scale+27+'px'
	});
}
function stockList() {
	var r = 213/320;
	$('.stock-l li div').each(function() {
		$(this).css({
			'height': $(this).width()*r+'px',
			/*'background': 'url("'+$(this).find('img').attr('src')+'") no-repeat center center',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'*/
		});
	});
}
function stockItem() {
	var r = 440/662;
	$('.stock-s div').css({
		'height': $('.stock-s div').width()*r+'px',
		/*'background': 'url("'+$('.stock-s div').find('img').attr('src')+'") no-repeat center center',
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover'*/
	});
}
function galleryList() {
	var r = 282/426;
	$('.gallery-l li').each(function() {
		$(this).css({
			'height': $(this).width()*r+'px',
			'background': 'url("'+$(this).find('img').attr('src')+'") no-repeat center center',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'
		});
	});
	$('.gallery-l li a').each(function() {
		$(this).css({
			'height': $(this).width()*r+'px'
		});
	});
}
function newsList() {
	var r = 189/358;
	$('.news-l li div').each(function() {
		$(this).css({
			'height': $(this).width()*r+'px',
			/*'background': 'url("'+$(this).find('img').attr('src')+'") no-repeat center center',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'*/
		});
	});
}
function newsItem() {
	var r = 431/819;
	$('.news-s div').css({
		'height': $('.news-s div').width()*r+'px',
		/*'background': 'url("'+$('.stock-s div').find('img').attr('src')+'") no-repeat center center',
		'-webkit-background-size': 'cover',
		'-moz-background-size': 'cover',
		'-o-background-size': 'cover',
		'background-size': 'cover'*/
	});
}
$(document).ready(function() {
	nav();
	if ( $('.stock-l').length > 0 ) {
		stockList();
	}
	if ( $('.stock-s').length > 0 ) {
		stockItem();
	}
	if ( $('.gallery-l').length > 0 ) {
		galleryList();
	}
	if ( $('.news-l').length > 0 ) {
		newsList();
	}
	if ( $('.news-s').length > 0 ) {
		newsItem();
	}
});
$(window).resize(function() {
	nav();
	if ( $('.stock-l').length > 0 ) {
		stockList();
	}
	if ( $('.stock-s').length > 0 ) {
		stockItem();
	}
	if ( $('.gallery-l').length > 0 ) {
		galleryList();
	}
	if ( $('.news-l').length > 0 ) {
		newsList();
	}
	if ( $('.news-s').length > 0 ) {
		newsItem();
	}
});
$(window).load(function() {
	nav();
});