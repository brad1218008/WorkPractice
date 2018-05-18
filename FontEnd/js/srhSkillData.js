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
			var id = $("#searchNum").val();
			var con = $("#conSearchNum").val();
			searchByID(id,con);	
			break;
		case "UnitPrice":
			var unitPrice = $("#searchNum").val();
			var con = $("#conSearchNum").val();
			searchByUnitPrice(unitPrice,con);	
			break;
		case "HR":
			var hours = $("#searchNum").val();
			var con = $("#conSearchNum").val();
			searchByHR(hours,con);	
			break;
		case "TotalPrice":
			var totalPrice = $("#searchNum").val();
			var con = $("#conSearchNum").val();
			searchByTotalPrice(totalPrice,con);	
			break;
		case "Name":
			var name = $("#searchStr").val();
			searchByName(name);
			break;
		case "Skill":
			var skill = $("#searchStr").val();
			searchBySkill(skill);
			break;
		case "PhoneNumber":
			var phoneNumber = $("#searchStr").val();
			searchByPhoneNumber(phoneNumber);
			break;
		case "Location":
			var location = $("#searchSelect").val();
			searchByLocation(location);
			break;
	}
}

function searchByID(id,condition) {
	var idExist = false;
	if(condition == "eq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) == Number(id)) {
				idExist = true;
				searchData.push(data[i]);
				isSearch = true;
				refreshGrid();
				searchData = [];
				break;
			}
		}
	}else if(condition == "less") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) < Number(id)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) <= Number(id)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greater") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) > Number(id)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].ID) >= Number(id)) {
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

function searchByUnitPrice(unitPrice,condition) {
	var idExist = false;
	if(condition == "eq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) == Number(unitPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "less") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) < Number(unitPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) <= Number(unitPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greater") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) > Number(unitPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq"){
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].UnitPrice) >= Number(unitPrice)) {
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

function searchByHR(hours,condition) {
	var idExist = false;
	if(condition == "eq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) == Number(hours)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "less") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) < Number(hours)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) <= Number(hours)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greater") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) > Number(hours)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].HR) >= Number(hours)) {
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
function searchByTotalPrice(totalPrice,condition) {
	var idExist = false;
	if(condition == "eq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) == Number(totalPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "less") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) < Number(totalPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "lessEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) <= Number(totalPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greater") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) > Number(totalPrice)) {
				idExist = true;
				searchData.push(data[i]);
			}
		}
		isSearch = true;
		refreshGrid();
		searchData = [];
	}else if(condition == "greaterEq") {
		for(var i=0; i<data.length; i++) {
			if(Number(data[i].TotalPrice) >= Number(totalPrice)) {
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
	var idExist = false;
	for(var i=0; i<data.length; i++) {
		if(data[i].Name.includes(name)) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
		return;
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchBySkill(skill) {
	var idExist = false;
	for(var i=0; i<data.length; i++) {
		if(data[i].Skill.includes(skill)) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
		return;
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchByPhoneNumber(phoneNumber) {
	var idExist = false;
	for(var i=0; i<data.length; i++) {
		if(data[i].PhoneNumber.includes(phoneNumber)) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
		return;
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}

function searchByLocation(location) {
	var idExist = false;
	for(var i=0; i<data.length; i++) {
		if(data[i].Location.includes(location)) {
			idExist = true;
			searchData.push(data[i]);
		}
	}
	if(!idExist) {
		alert("沒有您想要查詢資料");
		return;
	}	
	isSearch = true;
	refreshGrid();
	searchData = [];
}