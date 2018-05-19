// -----------------
//|  Modify Data	| 
// -----------------

function modifyData(tmp) {
	for(var i=0; i<data.length; i++) {
		if(data[i].ID == tmp.ID) {
			data[i] = tmp;
			showAllGridFirstPage();
			break;
		}
	}
	$("#modifyModal").modal('hide');
}