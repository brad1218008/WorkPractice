isSearch = false;
searchData = [];

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
	}else {
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
	}else {
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
	}else {
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