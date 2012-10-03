var EXTENSION_URL = "https://github.com/amirnissim/gmail-lighbox";

var $body = $("body");
var orig_body_html = $body.html();

var $main_container = $('<div id="main-container"></div>');
var $lightbox_container = $('<div id="lightbox-container"></div>').appendTo($main_container);

$.each($("img"), function(i, img){
	var $img = $(img);
	var a_wrapper = $("<a></a>").attr("href", $img.attr("src")).attr("rel", "lightbox[gmail-lightbox]");
	$lightbox_container.append($img);
	$img.wrap(a_wrapper);
	$img.css("right", i*7);
});


$body.empty();
$body.addClass("gmail-lightbox-content")
	.append($main_container)
	.append("<p class='gmail-lightbox-content'>" +
		"This is modified view created by " +
		"<a href='" + EXTENSION_URL + "' target='_blank' class='gmail-lightbox-content'>Gmail Lightbox</a>." +
		"</p>")
	.append("<p>" +
		"<a class='gmail-lightbox-content' id='restore' href='#'>Restore the old look<a>" +
		"</p>");

$("#restore").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	$body.html(orig_body_html).removeClass("gmail-lightbox-content");
});