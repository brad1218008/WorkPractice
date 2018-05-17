//change picture
function chgSkillPicture() {
	imagepath = "asset/" + $("#skillSelect").val().split(",")[0] + ".png"
	//console.log(imagepath)
	$("#skillPicture").attr("src",imagepath);
}

//show other input textfeild
function isOther(Other) {
	if(Other) {
		$("#otherSkill").css("display","block");
		$("#setUnitPrice").css("display","block");
		$("#unitPrice").css("display","none");
		$("#totalPrice").text("")
	}
	else{
		$("#otherSkill").css("display","none");
		$("#setUnitPrice").css("display","none");
		$("#unitPrice").css("display","block");
	}
}

//
function chgUnitPrice(unitprice) {
	$("#unitPrice").text(unitprice);
	$("#totalPrice").text(Number($("#unitPrice").text()) * Number($("#setHR").val()));
}

function setTotalPrice() {
	if($("#skillSelect").val().split(",")[0] == "other") {
		if($("#setUnitPrice").val() == ""){
			return;
		}else {
			$("#totalPrice").text(Number($("#setUnitPrice").val()) * Number($("#setHR").val()));
		}
	}else {
		$("#totalPrice").text(Number($("#unitPrice").text()) * Number($("#setHR").val()));
	}
	
}