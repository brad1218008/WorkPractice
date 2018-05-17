function wirteGridView() {
		
	var jsondate = JSON.stringify(data)
	var skillDate = JSON.parse(jsondate);
	
	$("#grid").kendoGrid({
		dataSource: {
			data: skillDate,
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
			{field: "Name", width: "105px"},
			{field: "Skill", width: "110px"},
			{field: "UnitPrice", title: "Price", format: "{0:c0}", width: "90px"},
			{field: "HR", title: "Hours", width: "100px"},
			{field: "TotalPrice", title: "Total", format: "{0:c0}", width: "95px"},
			{field: "PhoneNumber", width: "155px"},
			{field: "Location", width: "130px"}
		]
	});
}

function refreshGrid(tmp) {
	
	var jsondate = JSON.stringify(tmp)
	var skillDate = JSON.parse(jsondate);
	
	$('#grid').data('kendoGrid').dataSource.add(skillDate);
	$('#grid').data('kendoGrid').refresh();
}