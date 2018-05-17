function deleteData(id){
	var ans = confirm("確定要刪除 ID:" + id + " 這筆資料嗎？");
	if(ans) {
		var idExist = false;
		for(var i=0; i<data.length; i++) {
			if(data[i].ID == id) {
				idExist = true;
				data.splice(i,1);
				skillData.splice(0,1);
				refreshGrid();
				break;
			}
		}
		if(!idExist) {
			alert("您輸入的 ID:" + id + " 資料不存在");
		}
	}else {
		return;
	}
}