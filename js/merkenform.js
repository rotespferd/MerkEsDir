$("#send").click(function() {
	//Inhalt aus Formular holen
	var input = $("#input").val();
	input = "<li class='hidden'>" + input + "</li>";
	$("#merkliste").append(input);
	$(".hidden").fadeIn(500);
	$("#input").val("");
});