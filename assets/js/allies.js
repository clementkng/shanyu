$(document).ready(function() {
	$("#bottom-menu-sign").click(function() {
  		$("#bottom-menu-sign").hide();
		$("#bottom-menu").show("slow");
  	});

  	$("#bottom-menu-close").click(function() {
  		$("#bottom-menu").hide();
		$("#bottom-menu-sign").show("slow");
  	});
});