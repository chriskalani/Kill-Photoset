/**********************************************************************************************
**  jQuery Kill Photoset v1.0 (for Tumblr themes)
**  This gets rid of the flash slideshow Tumblr forces photo posts with multiple images to use.
**  
**  Copyright © 2010 Chris Kalani
**  MIT License - http://www.opensource.org/licenses/mit-license.php
**  Project URL: http://chriskalani.com/killphotoset
**********************************************************************************************/

;(function($){

	var defaults = {
		photoSize: 1280
	};
	
	$.fn.killPhotoset = function(options){ 
	
		var o =  $.extend(defaults, options);
		
		return this.each(function(){
		
			$this = $(this);
			
			$this.empty();
			
			var set = $this.attr("id");
			var id = set.split("_")[1];
			
			$.getJSON("/api/read/json?id="+id+"&callback=?", function(boom){
			
				var pix = boom["posts"][0]["photos"];
				
				$.each(pix, function(){
					var img = this["photo-url-"+o.photoSize];
					$this.append('<p><img src="'+img+'" /></p>');
				});
			
			});
		});
	};
})(jQuery);