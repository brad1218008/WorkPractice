//Init Function
$(function () {
	//GirdView
	wirteGridView();
	$("#otherSkill").css("display","none");
	$("#setUnitPrice").css("display","none");
	$("#equalMode").css("display","none");

	//skillSelectChange and UnitPrice
	$("#skillSelect").change(function () {
		chgSkillPicture();
		if ($("#skillSelect").val().split(",")[0] == "other") {
			isOther(true);
			return;
		} else {
			isOther(false);
		}
		chgUnitPrice($("#skillSelect").val().split(",")[1]);
	});

	//JQuery Multiple
	$("#location").multipleSelect();
//	$("#modLocation").multipleSelect();
	$(".ms-parent form-control").attr("style", "width: 100%");

	//Set totalPrice - not Other
	$("#setHR").change(function () {
		if (Number($("#setHR").val()) == 0) {
			$("#setHR").val("1");
			setTotalPrice();
			return;
		}
		if ($("#skillSelect").val().split(",")[0] == "other" &&
			$("#setHR").val() == "")
			return;
		setTotalPrice();
	});

	//Set totalPrice - is Other
	$("#setUnitPrice").change(function () {
		if (Number($("#setUnitPrice").val()) < 140) {
			$("#setUnitPrice").val("");
			return;
		}
		setTotalPrice();
	});
	
	$("#modHR").change(function() {
		if (Number($("#modHR").val()) == 0) {
			$("#modHR").val("1");
		}
		$("#modPrice").val(Number($("#modHR").val()) * Number($("#modUnitPrice").val()));
	});

	//Learning Mode Button Click
	$("#lrnMode").on("click", learningMode);

	//Query Mode Button Click
	$("#qryMode").on("click", queryMode);

	//Add new data Button Click
	$("#addMySkill").on("click", addDataValidation);

	//Function mode changed
	$("#featureSelect").change(function () {
		if ($("#featureSelect").val() == "search") {
			searchMode();
		} else if ($("#featureSelect").val() == "modify") {
			modifyMode();
		} else {
			deleteMode();
		}
	});

	//Search Column Change
	$("#columnSelect").change(function () {
		var mode = $("#columnSelect").val()
		if (mode == "ID" || mode == "UnitPrice" ||
			mode == "HR" || mode == "TotalPrice") {
			numMode();
			rangeMode();
			$("#minNum").val("");
			$("#maxNum").val("");
			$("#searchData").css("display","block");
		} else if (mode == "Name" || mode == "Skill" ||
			mode == "PhoneNumber") {
			strMode();
			$("#searchStr").val("");
			$("#searchData").css("display","none");
		} else if (mode == "Location") {
			selectMode();
			$("#searchData").css("display","none");
		}
	});
	
	//Range Mode Change
	$("#conSearchNum").change(function() {
		var mode = $("#conSearchNum").val()
		if(mode == "equal") {
			equalMode();
		}else if(mode == "range") {
			rangeMode();
		}
	});
	
	//Search Button Click
	$("#searchData").on("click", function () {
		var searchType = $("#columnSelect").val();
		searchBy(searchType);
	});
	
	//Modify Button Click
	$("#modifyData").on("click", function () {
		var id = $("#modifyID").val();
		showModefyModal(id);
	});
	
	//Delete Button Click
	$("#deleteData").on("click", function () {
		var id = $("#deleteID").val();
		deleteData(id);
	});

	
// ------------------------------
//|   Real Time String Search	|  邊輸入變搜尋
// ------------------------------	
	
	$("#searchStr").keyup(function(e) {
		var tmp = $(this).val();
		var mode = $("#columnSelect").val();
		if(mode == "Name") {
			searchByName(tmp);
		}else if(mode == "Skill") {
			searchBySkill(tmp);
		}else if(mode == "PhoneNumber") {
			searchByPhoneNumber(tmp);
		}
	});
	
	$("#searchSelect").change(function() {
		var tmp = $(this).val();
		searchByLocation(tmp);
	});
	
	
// ------------------------------
//|   Cancel Error Red Border	|  消除紅框
// ------------------------------
	
	
	//Name Input Keyup
	$("#name").keyup(function(e) {
		var tmp = $(this).val();
		if(tmp != "") {
			$("#name").removeAttr("style");
		}
	});
	//Other Skill Input Keyup
	$("#otherSkill").keyup(function(e) {
		var tmp = $(this).val();
		if(tmp != "") {
			$("#otherSkill").removeAttr("style");
		}
	});
	//Set UnitPrice Input Keyup
	$("#setUnitPrice").keyup(function(e) {
		var tmp = $(this).val();
		if(tmp != "") {
			$("#setUnitPrice").removeAttr("style");
		}
	});
	//PhoneNumber Input Keyup
	$("#phoneNumber").keyup(function(e) {
		var tmp = $(this).val();
		if(tmp != "") {
			$("#phoneNumber").removeAttr("style");
		}
	});
	//Set UnitPrice Input Keyup
	$("#location").change(function() {
		var tmp = $(this).val();
		if(tmp != "") {
			$(".ms-parent").removeAttr("style");
		}
	})
	
});
