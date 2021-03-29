 var metaslider_2865 = function($) {
            $('#godere_items').addClass('flexslider'); // theme/plugin conflict avoidance
            $('#godere_items').flexslider({
                slideshowSpeed:3800,
                animation:"slide",
                controlNav:false,
                directionNav:true,
                pauseOnHover:false,
                direction:"horizontal",
                reverse:false,
                animationSpeed:1300,
                prevText:"&lt;",
                nextText:"&gt;",
                easing:"linear",
                slideshow:true
            });
        };
        var timer_metaslider_2865 = function() {
            var slider = !window.jQuery ? window.setTimeout(timer_metaslider_2865, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_2865, 1) : metaslider_2865(window.jQuery);
        };
        timer_metaslider_2865();
