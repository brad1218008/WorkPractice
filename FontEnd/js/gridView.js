function wirteGridView() {
	
	$("#grid").kendoGrid({
		dataSource: {
			transport: {
			  read: function(options){
				  var localData = ""
				  if(isSearch) {
					  localData = JSON.parse(JSON.stringify(searchData));
				  }else{
					  localData = JSON.parse(JSON.stringify(data));
				  }
				  options.success(localData);
				  isSearch = false;
			  },
			},
			schema: {
				model: {
					fields: {
						ID:{type: "number"},
						Name: { type: "string" },
						Skill: { type: "string" },
						UnitPrice: { type: "number" },
						HR: { type: "number" },
						TotalPrice: { type: "number" },
						PhoneNumber: { type: "string" },
						Location: { type: "string" }
					}
				}
			},
			pageSize: 9
		},
		height: 602,
		scrollable: true,
		sortable: true,
//		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			{field: "ID", width: "65px"},
			{field: "Name", title: "姓名", width: "105px"},
			{field: "Skill", title: "技能", width: "110px"},
			{field: "UnitPrice", title: "每小時", format: "{0:c0}", width: "105px"},
			{field: "HR", title: "時數", width: "85px"},
			{field: "TotalPrice", title: "總價", format: "{0:c0}", width: "95px"},
			{field: "PhoneNumber", title: "電話號碼", width: "155px"},
			{field: "Location", title: "地點", width: "130px"}
		]
	});
}

function refreshGrid() {
	$('#grid').data('kendoGrid').dataSource.read();
}