$(document).ready(function() {
	const distanceToNextImage = -600;
	let currentImageNumber = 0;

	$("#lightbox").hide();


	$(".item").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("#lightbox").show();
	});
	

	// Carousel section
	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 12;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 11 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})

	// jQuery Function Number 6
	// Special thanks to Jeffrey Yuan's The Corporation for giving me the knowledge to replace the gifs with jpgs
	$(".item").hover(function() {

		$(this).css("opacity", "1");
		let id = $(this).attr("id");

		$(this).css("transition", "0.2s");
		let s = $("#" + id + ".item >.child").attr("src");
		$("#" + id + ".item >.centered").css("top", "15%");
		$("#" + id + ".item >.child").attr("src", s.replace(".jpg", ".gif"));
		$(".centered").css("transition", "0.3s");
	}, function() {
		$(this).css("opacity", "0.7");
		let id = $(this).attr("id");
		let s = $("#" + id + ".item >.child").attr("src");
		$("#" + id + ".item >.centered").css("top", "85%");
		$("#" + id + ".item >.child").attr("src", s.replace(".gif", ".jpg"));
	});

	$("#bottom-menu-sign").click(function() {
  		$("#bottom-menu-sign").hide();
		$("#bottom-menu").show("slow");
  	});

  	$("#bottom-menu-close").click(function() {
  		$("#bottom-menu").hide();
		$("#bottom-menu-sign").show("slow");
  	});
});