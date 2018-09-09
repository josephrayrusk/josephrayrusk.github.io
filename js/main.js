$(document).ready(function() {
 var loading = $(".landing");
 var logoParts = [svg_1, svg_2, svg_3];
 var main = $("#main");
  var la = new TimelineMax();

la.staggerFromTo(logoParts, 1, {opacity: 0, y: -200}, {opacity: 1, y: 0}, 0.5, 1)
  .to(logo, 0.1,{scale: 1.05, delay: 2})
  .to(logo, 0.5,{opacity: 0, y: -20, scale: 0.4, ease: SlowMo.ease.config(0.4,0.7,false)})
  .to(loading, 0.1,{height: 0})
  .to(main, 0 ,{height: 100, display: 'block'}, '-=0.3');


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  var eyes = $(".eyes");
  var eyeball = $(".eyeball")
  var blink = new TimelineMax({repeat: -1});

  blink.to(eyeball,0.2,{opacity: 0.1, yoyo: true, repeat: 1, delay: 3})
  blink.to(eyeball[0],0.2,{opacity: 0.1, yoyo: true, repeat: 1, delay: 3})
  blink.to(eyeball,0.2,{opacity: 0.1, yoyo: true, repeat: 1, delay: 3})
  blink.to(eyeball[1],0.2,{opacity: 0.1, yoyo: true, repeat: 1, delay: 3})
});
