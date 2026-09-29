// The nav mark as the Lottie logo animation (the same logo.json as the home
// page hero). Each .logo-lottie keeps its logo.png until the animation has
// loaded, so a slow or failed load still shows the mark. Reduced motion shows
// the finished frame instead of playing it.
(function(){
  if(!window.lottie) return;
  var calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var boxes = document.querySelectorAll('.logo-lottie');
  for(var i = 0; i < boxes.length; i++){
    (function(box){
      var fallback = box.querySelector('img');
      var anim = lottie.loadAnimation({container: box, renderer: 'svg', loop: false, autoplay: !calm, path: '/logo.json'});
      anim.addEventListener('DOMLoaded', function(){
        if(fallback) fallback.remove();
        if(calm) anim.goToAndStop(anim.totalFrames - 1, true);
      });
    })(boxes[i]);
  }
})();
