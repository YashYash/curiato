
$('window').on('load', function() {
	console.log("LOADED");
})
$('#testbutton').on('click', function() {
	console.log("BUTTON BEING PRESSED");
})

var someFunction = function() {
	console.log("### CALLING FUNCTION");
}