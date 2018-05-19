// -----------------
//|    User MODE	|  新增及使用功能上介面的改變
// -----------------

function learningMode(){
	if($("#lrnMode.btn-primary").length > 0) {
		return;
	}else{
		$("#qryMode.btn-primary").removeClass("btn-primary").addClass("btn-secondary");
		$("#lrnMode").removeClass("btn-secondary").addClass("btn-primary");
		$(".addSkill").css("display","block");
		$(".search").css("display","none");
	}
}

function queryMode(){
	if($("#qryMode.btn-primary").length > 0) {
		return;
	}else{
		$("#lrnMode.btn-primary").removeClass("btn-primary").addClass("btn-secondary");
		$("#qryMode").removeClass("btn-secondary").addClass("btn-primary");
		$(".addSkill").css("display","none");
		$(".search").css("display","block");
		resetAll();
	}
}

// -----------------
//|  Funtion MODE	|  查詢、修改、刪除下方欄位的改變
// -----------------

function searchMode() {
	$("#searchMode").css("display","block");
	$("#modifyMode").css("display","none");
	$("#deleteMode").css("display","none");
}

function modifyMode() {
	$("#searchMode").css("display","none");
	$("#modifyMode").css("display","block");
	$("#deleteMode").css("display","none");
}

function deleteMode() {
	$("#searchMode").css("display","none");
	$("#modifyMode").css("display","none");
	$("#deleteMode").css("display","block");
}

// -----------------
//|  Search MODE	|   查詢功能依照欄位不同下方可輸入欄位的改變
// -----------------

function numMode() {
	$("#searchNumGroup").css("display","block");
	$("#searchStrGroup").css("display","none");
	$("#searchSelectGroup").css("display","none");
}

function strMode() {
	$("#searchStrGroup").css("display","block");
	$("#searchNumGroup").css("display","none");
	$("#searchSelectGroup").css("display","none");
}

function selectMode() {
	$("#searchStrGroup").css("display","none");
	$("#searchNumGroup").css("display","none");
	$("#searchSelectGroup").css("display","block");
}

// -----------------
//|  Range  MODE	|   看使用者是要輸入特定值或是範圍
// -----------------

function equalMode() {
	$("#equalMode").css("display","block");
	$("#rangeMode").css("display","none");
}

function rangeMode() {
	$("#equalMode").css("display","none");
	$("#rangeMode").css("display","block");
}
