function getClosestHeader(){var t=$(".sidebar a"),e=window.scrollY,o=t.first(),n=$(".tutorial-content");if(e<300)return o;if(e+window.innerHeight>=n.offset().top+n.height())return t.last();for(var i=0;i<t.length;i++){var r=t.eq(i),s=r.attr("href");if(s!==undefined&&"#"===s.charAt(0)&&1<s.length){var f=$(s);if(0<f.length){if(e<f.offset().top-window.innerHeight/2)return o;o=r}}}return o}function throttle(t,e){var o=!1;return function(){o||(t.apply(null,arguments),o=!0,setTimeout(function(){o=!1},e))}}jQuery(function(){function t(){var t=85,e=i.offset().top+i.outerHeight()-o.outerHeight()-t;window.scrollY>e?o.css("position","absolute").css("top",i.outerHeight()-o.outerHeight()):window.scrollY>i.offset().top?o.css("position","fixed").css("top",t):o.css("position","absolute").css("top",t)}function e(){$(".sidebar a").removeClass("active"),getClosestHeader().addClass("active")}var o=$(".sidebar"),n=$(".content"),i=$(".tutorial-content"),r=($(window),n.offset().top,o.find("a").first().attr("href"));r!==undefined&&"#"===r.charAt(0)&&(e(),$(window).on("scroll",function(){throttle(function(){e(),t()},100)()}))});