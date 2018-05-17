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
		if($("#skillSelect").val().split(",")[0] == "other" && $("#setHR").val() == "")
			return;
		setTotalPrice();
	})
	
	//Set totalPrice - is Other
	$("#setUnitPrice").change(function() {
		if(Number($("#setHR").val()) == 0) {
			$("#setHR").val("");
			return;
		}
		setTotalPrice();
	})
});