var EXTENSION_URL = "https://github.com/amirnissim/gmail-lighbox";

var $body = $("body");
var old_content = $body.html();

if ($body.find("img").length > 0){  // only if page contains images (exempt pdf attachment preview)

	var $images = $('<div id="images"></div>');
	$("img").each(function(i, img){
		var $img = $(img);
		var wrapper = $("<a></a>").attr("href", $img.attr("src")).attr("rel", "lightbox[gmail]");
		$images.append($img);
		$img.wrap(wrapper);
	});

	var $footer = $('<div id="footer"></div>')
					.append("<p>" +
						"This page was modified by " +
						"<a href='" + EXTENSION_URL + "' target='_blank'>Gmail Lightbox</a> chrome extension." +
						"</p>")
					.append("<p>Take me back to the 90s and " +
						"<a id='restore' href='#'>restore the old look<a>" +
						"</p>");

	var $new_content = $('<div id="content"></div>')
						.append($images, $footer);


	$body.empty().append($new_content).addClass("modified");

	$("#restore").click(function(e){
		$body.html(old_content).removeClass("modified");
	});
}