// Edit the date here

$(document).ready(function() {
	var date = new Date();
	var hr = date.getHours();
	var mi = date.getMinutes() + 1;
	var se = date.getSeconds();

	if (mi >= 60) {
		hr += 1;
		mi -= 60;
		se = 0;
	}
	console.log("28 September 2015 " + hr + ":" + mi + ":" + se);
	$("#countdown").countdown({
				date: "28 September 2015 " + hr + ":" + mi + ":" + se,
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
