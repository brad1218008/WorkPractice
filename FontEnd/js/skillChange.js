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
//		$("#otherSkill").removeAttr("style");
		$("#otherSkill").css("display","none");
//		$("#setUnitPrice").removeAttr("style");
		$("#setUnitPrice").css("display","none");
		$("#unitPrice").css("display","block");
	}
}

//change UnitPrice
function chgUnitPrice(unitprice) {
	$("#unitPrice").text(unitprice);
	$("#totalPrice").text(Number($("#unitPrice").text()) * Number($("#setHR").val()));
}

//set Total Price
function setTotalPrice() {
	//if is other
	if($("#skillSelect").val().split(",")[0] == "other") {
		//input is invalid
		if($("#setUnitPrice").val() == ""){
			return;
		}else {
			$("#totalPrice").text(Number($("#setUnitPrice").val()) * Number($("#setHR").val()));
		}
	}else {
		$("#totalPrice").text(Number($("#unitPrice").text()) * Number($("#setHR").val()));
	}
	
}