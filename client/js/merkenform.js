$("#send").click(function() {
	saveItem();
});

$("#input").keydown(function(e) {
	var code = e.keyCode || e.which;
	if(code == "13"){
		saveItem();
	}
});

function saveItem() {
	var input = $("#input").val();
	input = "<li class='hidden'>" + input + "</li>";
	$("#merkliste").append(input);
	$(".hidden").fadeIn(500);
	$("#input").val("");
	$("#input").focus();
	//push input to server
}