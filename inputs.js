/*
*  Author: Timmy Willison
*  A plugin that creates a custom selector for 
*  selecting any type of input element in a cross-browser way.
*  $('tag:inputs(args)') --> ex: $('input:inputs(text)').doSomething();
*/

(function($) {
   $.expr[':'].inputs = function(obj, index, meta, stack){
      return ($(obj).attr('type'===meta[3]));
   };
})(jQuery);