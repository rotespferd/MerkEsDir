var savePath = "upload";

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
	
	if(input == "") {
		return;
	}
	
	input = "<li class='hidden'>" + input + "</li>";
	$("#merkliste").append(input);
	$(".hidden").fadeIn(500);
	$("#input").val("");
	$("#input").focus();
	//push input to server
	sendItem(input);
}

function sendItem(item) {
	$.ajax({
		url: savePath,
		type: "POST",
		context: document.body,
		success: function() {
			//irgendeine erfolgsmeldung?
			console.log("Item" + item + " successfull uploaded.");
		},
		data: {merkItem: item},
		dataType: "text"
	});
}