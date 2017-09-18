// 예제 6-12 comp-comm/src/app/check-list/check-list.component.ts [ch6-3]

// 임포트 생략

@Component({ ... })
export class CheckListComponent implements OnInit {
    checkList: string[];
    checkedResult: boolean[] = [];
    checkedResultData: string[];
    
    constructor() { ... }
    
    extractCheckedResult() {
	this.checkedResultData = [];
	this.checkedResult.forEach((isChecked, idx) => {
	    if(isChecked) {
		this.checkedResultData.push(this.checkList[idx]);
	    }
	});
    }

    ngOnInit() { }
}
