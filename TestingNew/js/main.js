(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        intro = id("intro"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c)*0.22 << 0) +"rem";
      intro.style.width = perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
        
//      setTimeout(function(){ 
//        ovrl.style.display = "none";
//      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());
