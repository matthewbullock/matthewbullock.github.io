	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

	$(function () {
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
});