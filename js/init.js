// Edit the date here

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "28 September 2015 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
