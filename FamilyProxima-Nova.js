void(
	(function(){
		function FONT_FAMILY(font){
			jQuery("*").each(function(){
				$element = jQuery(this);
				$font = $element.css("font-family");
				$element.css("font-family",$font == "icomoon" ? "icomoon" : font); 
			}); 
		}
		$('head').append('<style type="text/css">.tk-proxima-nova{font-family:"proxima-nova",sans-serif;}</style><link rel="stylesheet" href="https://use.typekit.net/c/b9c76e/1w;proxima-nova,6e4e643aac446d74e7aa4c02e23d1d0d451a8c2ca0697b53595944b68381e6e5,gbm:W:i4,gbt:W:i7,gbg:W:n1,gbj:W:n3,gbl:W:n4,gbs:W:n7/l?3bb2a6e53c9684ffdc9a9bfe1d5b2a622b4c22dc410c939a870175015f54bbd0bfc8acd26ea8fce531cb1855a543ea6cbf655eafc372d8d440016bd6a477f3e0c556ced0cec77d966f82756d40b60283d007be89a023bf4692c2bc9d3ea4a894d3ade9ff8315830eef802ad6637f724258d605eec4c2a1094ace6fffb882c23ac4d9b4974c234d2c7d21c1d97007a2dcf07e8cff01c325255d9b88c527dddc9c3805db84f17d7765f6c631c716b370957705353589eb1783e629bd" media="all"><script type="text/javascript">try{Typekit.load();}catch(e){}</script><script>');
		FONT_FAMILY("proxima-nova");
	}())
);
