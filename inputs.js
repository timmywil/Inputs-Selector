/*
*  Author: Tim Willison
*  A plugin that creates a custom selector for 
*  selecting any type of input element in a cross-browswer way.
*  ex: $('input:inputs(text)').hide();
*  
*/

(function($) {
   $.expr[':'].inputs = function(obj, index, meta, stack){
      return ($(obj).attr('type'===meta[3]));
   };
})(jQuery);