function addData() {
	var tmp = {}
	
	//get ID
	var NextID = String(Number(data[data.length-1].ID) +1) 
	tmp.ID = NextID
	
	//get Name
	var name = $("#name").val()
	tmp.Name = name
	
	
	var skill = ""
	var unitPrice = ""
	if($("#skillSelect").val() == "other") {
		//get Skill
		skill = $("#otherSkill").val()
		//get UnitPrice
		unitPrice = $("#setUnitPrice").val()
	}else {
		//get Skill
		skill = $("#skillSelect").find(":selected").text()
		//get UnitPrice
		unitPrice = $("#unitPrice").text()

	}
	tmp.Skill = skill
	tmp.UnitPrice = unitPrice
	
	//get HR
	var hr = $("#setHR").val()
	tmp.HR = hr
	
	//get TotalPrice
	var totalPrice = $("#totalPrice").text()
	tmp.TotalPrice = totalPrice
	
	//get PhoneNumber
	var phoneNumber = $("#phoneNumber").val()
	tmp.PhoneNumber = phoneNumber
	
	//get Location
	var location = $("#location").val().join()
	tmp.Location = location
	
	data.push(tmp);
	refreshGrid(tmp);
	resetAll();
}

function resetAll() {
	$("#name").val("");
	$("#skillSelect").val("program,800");
	$("#otherSkill").css("display","none");
	$("#setUnitPrice").css("display","none");
	$("#unitPrice").css("display","block");
	$("#unitPrice").text("800");
	$("#setHR").val("1");
	$("#totalPrice").text("800");
	$("#phoneNumber").val("");
	$("#location").val("台北");
	
}