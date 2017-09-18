// 예제 6-14 comp-comm/src/app/check-list/check-list-result/check-list-result.component.ts [ch6-4]

import { Component, OnInit, Input } from '@angular/core';

@Component({ ... })
export class CheckListResultComponent implements OnInit {
    _checkedData: string[];
    checkedCnt: number;

    constructor() { }
    
    @Input()
    set checkedResult(checkedResult: string[]) {
	if (!checkedResult) {
	    return;
	}
	this._checkedData = checkedResult;
	this.checkedCnt = this._checkedData.length;
    }
        
    ngOnInit() { }
}
