/**
 jquery.necoru.js ver1.0

The MIT License

Copyright (c) 2012 jun takeno
http://yamitake.github.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
(function($) {
  $.fn.necoru = function(options){
    /**
     * default Options
     */
    var defaults ={
      caption: "ネコる！" ,
      done: "ネコった！" ,
      failed: "失敗ニャ" ,
      counter: Math.floor(Math.random() * 1000) ,
      audio: true
    };
    
    
    var opts = $.extend(defaults , options);
    
    var r = this.each(function(){
      $(this).append(
        '<a href="#" class="necorub-link " rel="like">' + 
          '<span class="necorub-icon"></span>' + 
          '<span class="necorub-balloon">' + 
            '<span class="necorub-u"></span>' + 
            '<span class="necorub-d"></span>' + 
            '<span class="necorub-messages"> <span class="necorub-caption">'+ opts.caption +'</span>' + 
            '<span class="necorub-done">'+ opts.done +'</span>' + 
            '<span class="necorub-failed">'+ opts.failed +'</span>' + 
            '<span class="necorub-counter">'+ opts.counter +'</span> </span> </span></a>' + 
          '</span>'

      ).addClass("necoru-button");
      
      $(this).click(function(){
        $(this).addClass("necorub-clicked");
        $(this).trigger("necoru-clicked");
      });
    });
   
    return r;
  };
})(jQuery);