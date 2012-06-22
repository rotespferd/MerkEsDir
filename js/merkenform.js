var savePath = "http://127.0.0.1:8080/upload";

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
	
	liItem = "<li class='hidden'>" + input + "</li>";
	$("#merkliste").append(liItem);
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
		success: function() {
			//irgendeine erfolgsmeldung?
			console.log("Item " + item + " successfull uploaded.");
		},
		data: {merkItem: item}//TODO: wird das richtig übertragen?
	});
}