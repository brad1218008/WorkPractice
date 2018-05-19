// -----------------
//|  Add Data	   | 
// -----------------
						  
function addData(tmp) {
	data.push(tmp);
	showAllGridLastPage()
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