// -----------------
//|  Search Data	| 
// -----------------

//決定要丟入Grid中的資料室查詢後的資料
isSearch = false;
//查詢資料的暫存
searchData = [];


//依照使用者選擇搜尋欄位的不同去分類
function searchBy(searchType) {
	switch(searchType) {
		case "ID":
			var min = "";
			var max = "";
			var con = $("#conSearchNum").val();
			if(con == "range"){
				min = $("#minNum").val();
				max = $("#maxNum").val();
				if(min == "" && max == "") {
					return;
				}else if(min == "" && max != "") {
					con = "lessEq";
				}else if(min != "" && max == "") {
					con = "greaterEq";
				}
			}else if(con == "equal") {
				min = $("#searchNum").val();
				max = min;
			}
			searchByID(min,max,con);	
			break;
		case "UnitPrice":
			var min = "";
			var max = "";
			var con = $("#conSearchNum").val();
			if(con == "range"){
				min = $("#minNum").val();
				max = $("#maxNum").val();
				if(min == "" && max == "") {
					return;
				}else if(min == "" && max != "") {
					con = "lessEq";
				}else if(min != "" && max == "") {
					con = "greaterEq";
				}
			}else if(con == "equal") {
				min = $("#searchNum").val();
				max = min;
			}
			searchByUnitPrice(min,max,con);	
			break;
		case "HR":
			var min = "";
			var max = "";
			var con = $("#conSearchNum").val();
			if(con == "range"){
				min = $("#minNum").val();
				max = $("#maxNum").val();
				if(min == "" && max == "") {
					return;
				}else if(min == "" && max != "") {
					con = "lessEq";
				}else if(min != "" && max == "") {
					con = "greaterEq";
				}
			}else if(con == "equal") {
				min = $("#searchNum").val();
				max = min;
			}
			searchByHR(min,max,con);	
			break;
		case "TotalPrice":
			var min = "";
			var max = "";
			var con = $("#conSearchNum").val();
			if(con == "range"){
				min = $("#minNum").val();
				max = $("#maxNum").val();
				if(min == "" && max == "") {
					return;
				}else if(min == "" && max != "") {
					con = "lessEq";
				}else if(min != "" && max == "") {
					con = "greaterEq";
				}
			}else if(con == "equal") {
				min = $("#searchNum").val();
				max = min;
			}
			searchByTotalPrice(totalPrice,con);	
			break;
	}
}

function searchByID(min,max,condition) {
	var idExist = false;
	if(condition == "equal") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) == Number(min)) {
				idExist = true;
				searchData.push(data[i]);
				isSearch = true;
				refreshGrid();
				searchData = [];
				break;
			}
		}
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) >= Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "range"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) >= Number(min) &&
			  	Number(data[i].ID) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
	}	
}

function searchByUnitPrice(min,max,condition) {
	var idExist = false;
	if(condition == "equal") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) == Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) >= Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "range"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) >= Number(min) &&
			  	Number(data[i].UnitPrice) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
	}	
}

function searchByHR(min,max,condition) {
	var idExist = false;
	if(condition == "equal") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) == Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) >= Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "range"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) >= Number(min) &&
			  	Number(data[i].HR) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
	}	
}
function searchByTotalPrice(min,max,condition) {
	var idExist = false;
	if(condition == "equal") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) == Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) >= Number(min)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "range"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) >= Number(min) &&
			  	Number(data[i].TotalPrice) <= Number(max)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
	}	
}

function searchByName(name) {
	for(var i=0; i<data.length; i++) {
		if(data[i].Name.toLowerCase().includes(name.toLowerCase())) {
			idExist = true;
			searchData.push(data[i]);
		}
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchBySkill(skill) {
	for(var i=0; i<data.length; i++) {
		if(data[i].Skill.toLowerCase().includes(skill.toLowerCase())) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchByPhoneNumber(phoneNumber) {
	for(var i=0; i<data.length; i++) {
		if(data[i].PhoneNumber.includes(phoneNumber)) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchByLocation(location) {
	for(var i=0; i<data.length; i++) {
		if(data[i].Location.toLowerCase().includes(location.toLowerCase())) {
			idExist = true;
			searchData.push(data[i]);
		}
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}