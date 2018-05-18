//Init Function
$(function() {
	//GirdView
	wirteGridView();
	
	//skillSelectChange and UnitPrice
	$("#skillSelect").change(function() {
		chgSkillPicture();
		if($("#skillSelect").val().split(",")[0] == "other") {
			isOther(true);
			return;
		}else {
			isOther(false);
		}
		chgUnitPrice($("#skillSelect").val().split(",")[1]);
	});
	
	//JQuery Multiple
	$("#location").multipleSelect();
	$(".ms-parent form-control").attr("style","width: 100%");
	
	//Set totalPrice - not Other
	$("#setHR").change(function() {
		if(Number($("#setHR").val()) == 0) {
			$("#setHR").val("1");
			setTotalPrice();
			return;
		}
		if($("#skillSelect").val().split(",")[0] == "other" 
		   	 && $("#setHR").val() == "")
			return;
		setTotalPrice();
	});
	
	//Set totalPrice - is Other
	$("#setUnitPrice").change(function() {
		if(Number($("#setHR").val()) == 0) {
			$("#setHR").val("");
			return;
		}
		setTotalPrice();
	});
	
	//Learning Mode Button Click
	$("#lrnMode").on("click",learningMode);
	
	//Query Mode Button Click
	$("#qryMode").on("click",queryMode);

	//Add new data Button Click
	$("#addMySkill").on("click",addData);
	
	//Function mode changed
	$("#featureSelect").change(function() {
		if($("#featureSelect").val() == "search") {
			searchMode();
		}else if($("#featureSelect").val() == "modify") {
			modifyMode();
		}else {
			deleteMode();
		}
	});
	
	//Search Column Change
	$("#columnSelect").change(function() {
		var mode = $("#columnSelect").val()
		if(mode == "ID" || mode == "UnitPrice" ||
		   mode == "HR" || mode == "TotalPrice" ) {
			numMode();
		}else if(mode == "Name" || mode == "Skill" ||
				 mode == "PhoneNumber" ) {
			strMode();
		}else if(mode == "Location") {
			selectMode();
		}
	});
	//Search Button Click
	$("#searchData").on("click", function() {
		var searchType = $("#columnSelect").val();
		searchBy(searchType);
	});
	
	//Delete Button Click
	$("#deleteData").on("click", function() {
		var id = $("#deleteID").val();
		deleteData(id);
	});
});