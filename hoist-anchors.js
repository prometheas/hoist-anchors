// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, undefined ) {

	// Create the defaults once
	var pluginName = 'hoistAnchors';
	var defaults = {
		anchorSelector: "a.hoist-anchor[ href ]",
		hoistType: 'after'
	};

	// plugin constructor
	function Plugin( element, options ) {
		this.element   = element;
		this.options   = $.extend( {}, defaults, options) ;
		this._defaults = defaults;
		this._name     = pluginName;
		this.init();
	}

	Plugin.prototype.init = function () {

		var options = this.options;

		$( this.element ).css({"background-color": "red"});
		$( this.element ).find( options.anchorSelector ).each(function( index, element) {

			var $anchor = $( element );
			var href    = $anchor.attr("href");
			$.extend( options, $anchor.data() );

			if ( href.match(/^#\S+$/))
			{
				$anchor.removeClass('hoist-anchor');
				$hoist = $( href ).remove();

				switch ( options.hoistType )
				{
					case 'before':
						$hoist.insertBefore( $anchor );
						break;
					case 'after':
						$hoist.insertAfter( $anchor );
						break;
					case 'replace':
						$anchor.replaceWith( $hoist );
						break;
					case 'content':
						$anchor.empty().append( $hoist );
						break;
					case 'append':
					default:
						$anchor.append( $hoist );
						break;
				}
			}
		})
	};

	// A really lightweight plugin wrapper around the constructor, 
	// preventing against multiple instantiations
	$.fn[ pluginName ] = function ( options ) {

		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
			}
		});
	}

	$.hoistAnchors = function( params )
	{
		$('body').hoistAnchors( params );
	}

}(jQuery, window));
