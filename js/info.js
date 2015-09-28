$(function() {
	function a () {
	var d = $('.container .days').text();
	var h = $('.container .hours').text();
	var m = $('.container .minutes').text();
	var s = $('.container .seconds').text();

	console.log(d);
	console.log(h);
	console.log(m);
	console.log(s);

	if (d == '00' && h == '00' && m == '00' && s == '00') {
		console.log("fusufsbnifuasf");
		window.location = 'localhost:1234';
	} else {
		a();
	}
}
	a();
});