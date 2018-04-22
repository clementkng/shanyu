$(document).ready(function() {
	let pageHeight = $(document).height();
	let distanceFromTop = 0;
	$(document).scroll(function() {
    // jQuery Function Number 1
		distanceFromTop = $(document).scrollTop();
    // jQuery Function Number 2
		$("#main-pic img").css("transform", "scale(" + (1 + 1.5*distanceFromTop/pageHeight) + "," + (1 + 1.5*distanceFromTop/pageHeight) + ")");

	});
  // jQuery Function Number 3
	$("#main-pic img").click(function() {
    $("#bottom-tab").css("top", "0vh");
    $("#bottom-tab").css("transition-duration", "1.0s");
    $("body").css("overflow", "hidden");
		
	});
	$("#bottom-tab").click(function() {
		$("#bottom-tab").css("top", "90vh");
		$("body").css("overflow", "visible");
	});

	$("#bottom-menu-sign").click(function() {
    // jQuery Function Number 4
		$("#bottom-menu-sign").hide();
    // jQuery Function Number 5
	  $("#bottom-menu").show("slow");
	});

	$("#bottom-menu-close").click(function() {
		$("#bottom-menu").hide();
    $("#bottom-menu-sign").show("slow");
	});




  	// $( document.body ).click(function() {
  	//   if ( $( "div:first" ).is( ":hidden" ) ) {
  	//     $( "div" ).show( "slow" );
  	//   } else {
  	//     $( "div" ).slideUp();
  	//   }
  	// });
  	
})