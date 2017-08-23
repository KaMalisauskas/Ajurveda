jQuery(document).ready(function($) {
	
// 	$('li:last').addClass("last");
	$('ul, aside').find('li:last').addClass("last");
	
	// IMG: margin'ai float'inamoms iliustracijoms
	$('img[style*="float: left"], img[align="left"]').addClass("isFloatedLeft");
	$('img[style*="float: right"], img[align="right"]').addClass("isFloatedRight");

	
});