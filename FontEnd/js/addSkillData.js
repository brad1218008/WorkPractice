// -----------------
//|  Add Data	   | 
// -----------------

//原本資料最後一個ID
var originLastID = Number(data[data.length-1].ID);
						  
function addData() {
	var tmp = {};
	var isValid = true;
	
	//get ID
	var NextID = String(++originLastID);
	tmp.ID = NextID
	
	//get Name
	var name = $("#name").val();
	if(name == ""){
		$("#name").attr("style","border:2px solid red");
		isValid = false;
	}
	tmp.Name = name
	
	
	var skill = ""
	var unitPrice = ""
	if($("#skillSelect").val() == "other") {
		//get Skill
		skill = $("#otherSkill").val()
		if(skill == ""){
			$("#otherSkill").attr("style","border:2px solid red");
			isValid = false;
		}
		//get UnitPrice
		unitPrice = $("#setUnitPrice").val()
		if(unitPrice == ""){
			$("#setUnitPrice").attr("style","border:2px solid red");
			isValid = false;
		}
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
	if(phoneNumber == ""){
		$("#phoneNumber").attr("style","border:2px solid red");
		isValid = false;
	}
	if(!(/^09\d{8}$/.test(phoneNumber))) {
		$("#phoneNumber").attr("style","border:2px solid red");
		isValid = false;
//		$("#phoneNumber").attr("placeholder","格式不符");
		$("example").text("格式不符");
		$("example").css("color","red");
		setTimeout(function() {
			$("example").text("EX:0912345678");
			$("example").css("color","darkgray");
		},1500);
	}
	tmp.PhoneNumber = phoneNumber
	
	//get Location
	var location = $("#location").val().join()
	if(location == ""){
		$(".ms-parent").attr("style","border:2px solid red");
		isValid = false;
	}
	tmp.Location = location
	
	if(!isValid) {
		return;
	}
	
	data.push(tmp);
	refreshGrid();
	resetAll();
}

//輸入欄位全部回到起始值
function resetAll() {
	$("#name").val("");
	$("#name").removeAttr("style");
	$("#skillSelect").val("program,800");
	$("#otherSkill").removeAttr("style");
	$("#otherSkill").css("display","none");
	$("#setUnitPrice").removeAttr("style");
	$("#setUnitPrice").css("display","none");
	$("#unitPrice").css("display","block");
	$("#unitPrice").text("800");
	$("#setHR").val("1");
	$("#totalPrice").text("800");
	$("#phoneNumber").val("");
	$("#phoneNumber").removeAttr("style");
	//clear mutiple select
	$("#location").multipleSelect('uncheckAll');
	$("#location").multipleSelect("setSelects", ["台北"]);
	$(".ms-parent").removeAttr("style");
}

	
//Delay for a number of milliseconds
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}