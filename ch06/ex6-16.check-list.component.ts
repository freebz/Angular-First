// 예제 6-16 comp-comm/src/app/check-list/check-list.component.ts [ch6-5]

removeCheckedItem(removeItem) {
    this.checkedResult.forEach((isChecked, _id) => {
	if ( isChecked && this.checkList[_id] === removeItem ) {
	    this.checkedResult[_id] = false;
	    this.extractCheckedResult();
	}
    });
}
