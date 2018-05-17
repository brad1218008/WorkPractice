function wirteGridView() {
	
	var skillDate = JSON.parse(data);
	
	$("#grid").kendoGrid({
		dataSource: {
			data: skillDate,
			schema: {
				model: {
					fields: {
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
			pageSize: 8
		},
		height: 550,
		scrollable: true,
		sortable: true,
//		filterable: true,
		pageable: {
			input: true,
			numeric: false
		},
		columns: [
			{field: "Name"},
			{field: "Skill", width: "110px" },
			{field: "UnitPrice", title: "Unit Price", format: "{0:c0}", width: "120px" },
			{field: "HR", title: "Hours", width: "100px" },
			{field: "TotalPrice", title: "Total Price", format: "{0:c0}", width: "130px" },
			{field: "PhoneNumber", width: "155px" },
			{field: "Location", width: "100px"}
		]
	});
}