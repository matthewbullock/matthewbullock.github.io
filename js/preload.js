	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

	$(document).ready(function() {
    if($(window).width() >= 700) {
        darkenPage();
    }
    });
    
    function darkenPage(){
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
		var opacity = currentScrollTop/$('#blackOverlay').height();
		if(opacity < 0.7) {
        	$('#blackOverlay').css('opacity',currentScrollTop/$('#blackOverlay').height());
        }
        else {
        	$('#blackOverlay').css('opacity', 0.7);
        }
  });
};