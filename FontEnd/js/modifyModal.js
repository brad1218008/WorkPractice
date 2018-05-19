function showModefyModal(id) {
	var tmp = {};
	var idExist = false;
	for(var i=0; i<data.length; i++) {
		if(data[i].ID == id) {
			tmp = clone(data[i])
			idExist = true;
			break;
		}
	}
	if(!idExist) {
		alert("您輸入的 ID:" + id + " 資料不存在");
		return;
	}
	//Submit Modified Data
	
	
	$(".modal-title").text("ID : " + tmp.ID);
	$("#modName").val(tmp.Name);
	$("#modSkillSelect").val(tmp.Skill);
	$("#modUnitPrice").val(tmp.UnitPrice);
	$("#modHR").val(tmp.HR);
	$("#modPrice").val(tmp.TotalPrice);
	$("#modLocation").val(tmp.Location);
	$("#modPhoneNumber").val(tmp.PhoneNumber);
	$("#modifyModal").modal('show');
	
	$("#btnModify").on("click", function() {
		tmp.Name = $("#modName").val();
		if(tmp.Name == "") {
			alert("姓名不可為空");
			return;
		}
		tmp.HR = $("#modHR").val();
		tmp.TotalPrice = $("#modPrice").val();
		tmp.PhoneNumber = $("#modPhoneNumber").val();
		if(tmp.PhoneNumber == "") {
			alert("手機號碼不可為空");
			return;
		}
		if(!(/^09\d{8}$/.test(tmp.PhoneNumber))) {
			alert("手機號碼格式不符");
			return;
		}
		modifyData(tmp);
	});
	
}

// Pass Object By Value
function clone(obj){
    if(obj == null || typeof(obj) != 'object')
        return obj;

    var tmp = new obj.constructor(); 
    for(var key in obj)
        tmp[key] = clone(obj[key]);

    return tmp;
}