function learningMode(){
	if($("#lrnMode.btn-primary").length > 0) {
		return
	}else{
		$("#qryMode.btn-primary").removeClass("btn-primary").addClass("btn-secondary");
		$("#lrnMode").removeClass("btn-secondary").addClass("btn-primary");
		$(".addSkill").css("display","block");
		$(".search").css("display","none");
	}
}

function queryMode(){
	if($("#qryMode.btn-primary").length > 0) {
		return
	}else{
		$("#lrnMode.btn-primary").removeClass("btn-primary").addClass("btn-secondary");
		$("#qryMode").removeClass("btn-secondary").addClass("btn-primary");
		$(".addSkill").css("display","none");
		$(".search").css("display","block");
	}
}