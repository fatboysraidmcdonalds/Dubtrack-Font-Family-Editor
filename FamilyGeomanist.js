void(
	(function(){
		function FONT_FAMILY(font){
			jQuery("*").each(function(){
				$element = jQuery(this);
				$font = $element.css("font-family");
				$element.css("font-family",$font == "icomoon" ? "icomoon" : font);
			});
		}
		FONT_FAMILY("geomanist");
	}())
);
