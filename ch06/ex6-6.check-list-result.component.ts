// 예제 6-6 comp-comm/src/app/check-list/check-list-result/check-list-result.component.ts [ch6-2]

export class CheckListResultComponent {
    checkedCnt: number;
    checkedResult: string[];
    
    constructor() {
	this.initResult();
	const buttonElem = document.querySelector('button');
	buttonElem.addEventListener('click', () => this.collectCheckedResult());
    }
    
    private initResult() {
	this.checkedCnt = 0;
	this.checkedResult = [];
    }

    private collectCheckedResult() {
	this.initResult();
	const spanElems = document.querySelectorAll('span');
	for (let i = 0; i < spanElems.length; i++) {
	    const spanElem = spanElems.item(i);
	    
	    const checkboxElem = spanElem.querySelector('input');
	    if (checkboxElem.checked) {
		this.checkedResult.push(spanElem.querySelector('label').innerText);
	    }
	}
	this.checkedCnt = this.checkedResult.length;
    }
}
