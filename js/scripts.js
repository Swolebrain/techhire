/*****************************************************************************
	PRELOADER
*****************************************************************************/
	$(window).on('load', function(){
		$('#status').fadeOut();
		$('#preloader').delay(800).fadeOut('slow');
	});

$(document).ready(function () {

/*****************************************************************************
	CONTACT FORM
*****************************************************************************/
   	$("#ajax-contact-form").submit(function() {
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					url: "http://www.fvi-grad.com:4004/email-techhire",
					data: str,
					success: function(msg) {
						// Message Sent - Show the 'Thank You' message and hide the form
						if(msg != 'OK') {
                            result = msg;
						} else {
							result = '<div class="notification_ok">Your message has been sent. Thank you!</div>';
							$("#fields").hide();
						}
						$('#note').html(result);
					}
				});
				return false;
			});

/***************************************************
	ROTATING INTRO TEXT
***************************************************/
$(".rotate").show();
$(".rotate").textrotator({
	    animation: "dissolve",
	    separator: "*",
        speed: 3200
});

/***************************************************
	ABOUT OVERLAY
***************************************************/
	var open_overlay = ('#open'), close_overlay = ('#close'), content = ( '.content' ),
        overlay = ('#overlay'), about = ('#about'),
	out = ( 'animated fadeOutDown' ), enter = ( 'animated fadeInDown' ),
        open = ('animated fadeInUpBig'), close = ('animated fadeOutDownBig');
	$(open_overlay).click(function() {
	   $(content).removeClass(enter).addClass(out).fadeOut('slow');
		setTimeout(function() {
				$(overlay).fadeIn('slow');
				setTimeout(function() {
					$(about).removeClass(close).addClass(open).fadeIn('slow');
				}, 500);
			  }, 650);
	    	});
	$(close_overlay).click(function() {
		$(about).removeClass(open).addClass(close).fadeOut('slow');
		setTimeout(function() {
				$(overlay).fadeOut('slow');
				setTimeout(function() {
					$(content).removeClass(out).addClass(enter).fadeIn('fast');
				}, 700);
			  }, 500);
		});
});

/***************************************************
	 CENTER CONTENT
***************************************************/
var rsz;
$(function() {
    $(window).on('resize', function resize()  {
      rsz = resize;
        $(window).off('resize', resize);
        setTimeout(function () {
            var content = $('.content');
            var top = (window.innerHeight - content.height()) / 2;
            content.css('top', Math.max(0, top) + 'px');
          if($("body").hasClass("page-left")){
            var elem = $("#page-left").find(".container");
            var l = elem.offset().left;
            elem.offset({top: 0, left: 0});
            elem.css("width", "90%");
          }
            $(window).on('resize', resize);
        }, 50);
    }).resize();

/***************************************************
	PAGE SLIDE
***************************************************/

		var options = {
					classes			: 'mm-fullscreen',
					zposition		: 'next',
					moveBackground	: true
				};

				$('#page-left').mmenu( options );

				options.position = 'right',
				$('#page-right').mmenu( options );

				$('#page-left, #page-right')
					.on(
						'opening.mm',
						function()
						{
                          var $inside = $(this).find("#page-right-inside");
                          if (!$inside.offset()) $inside = $("#page-left").find(".container");
                          $('body').addClass( this.id );
                          setTimeout(function(){
                            var l = $inside.offset().left;
                            $inside.offset({ top: 50, left:l});
                            if ($inside.css("margin-right") < 0)
                              $inside.css("margin-right", 0);
                            if ($inside.css("margin-left") < window.innerWidth*.3)
                              $inside.css("margin-left", Math.floor(window.innerWidth*.05));
                            //$inside.css("width", window.innerWidth);
                            //rsz();
                          },0);

						}
					).on(
						'closing.mm',
						function()
						{
							$('body').removeClass( this.id );
						}
					);

				$('a.back')
					.on(
						'click',
						function( e )
						{
							e.preventDefault();
							$('#page-left, #page-right').trigger( 'close.mm' );
						}
					);
				});



/***************************************************
	ROTATING INTRO TEXT SCRIPT
***************************************************/
!function($){var defaults={animation:"dissolve",separator:",",speed:2000};$.fx.step.textShadowBlur=function(fx){$(fx.elem).prop("textShadowBlur",fx.now)
.css({textShadow:"0 0 "+Math.floor(fx.now)+"px black"})};$.fn.textrotator=function(options){var settings=$.extend({},defaults,options);
return this.each(function(){var el=$(this);var array=[];$.each(el.text().split(settings.separator),function(key,value){array.push(value)});el.text(array[0]);
var rotate=function(){switch(settings.animation){case"dissolve":el.animate({textShadowBlur:0,opacity:0},500,function(){index=$.inArray(el.text(),array);
if((index+1)==array.length){index=-1}el.text(array[index+1]).animate({textShadowBlur:0,opacity:1},500)});
;break;case"fade":el.fadeOut(settings.speed,function(){index=$.inArray(el.text(),
array);if((index+1)==array.length){index=-1}el.text(array[index+1]).fadeIn(settings.speed)});break}};setInterval(rotate,settings.speed*2)})}}
(window.jQuery);

/***************************************************
	BG TERMINAL SCRIPT
***************************************************/
(function(g){var e="";var d=0;var c;var a;var b;function f(){a.toggle(0);}g.fn.bgTerminal=function(j,o){c=g(this);var k=g.extend({url:null,speed:200,wait:1000,glow:false},j);function m(){var p=e.substring(0,d);b.text(p);if(d<e.length){setTimeout(m,(e[d]=="\n")?k.wait:k.speed);d++;}}function n(p,q){p=parseInt(p);q=parseInt(q);k.speed=(p<0)?1:p;k.wait=(q<0)?1:q;}function l(){return{speed:k.speed,wait:k.wait};}function h(p){p=parseInt(p);if(!p||p<0){p=1.5;}n(k.speed/p,k.wait/p);}function i(p){p=parseInt(p);if(!p||p<0){p=1.5;}n(k.speed*p,k.wait*p);}if(k.url){g.get(k.url,function(p){e=p;c.addClass("bgterminal");a=g("<span>");a.addClass("cursor");a.html("&nbsp;");setInterval(f,400);b=g("<span>");c.append(b);c.append(a);if(k.glow){c.addClass("bgterminal-glow");}c.data("bgterminal",{speedUp:h,speedDown:i,speed:l});m();});}if(typeof o=="function"){o(this);}return this;};})(jQuery);
