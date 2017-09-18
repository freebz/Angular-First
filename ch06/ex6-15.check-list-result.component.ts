// 예제 6-15 comp-comm/src/app/check-list/check-list-result/check-list-result.component.ts [ch6-5]

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({ ... })
export class CheckListResultComponent implements OnInit {
    _checkedData: string[];
    checkedCnt: number;
    @Output() onSelectedToRemoveItem = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }
    
    @Input()
    set checkedResult(checkedResult: string[]) {
	if (!checkedResult) {
	    return;
	}
	this._checkedData = checkedResult;
	this.checkedCnt = this._checkedData.length;
    }

    onRemove(idx) {
	this.onSelectedToRemoveItem.emit(this._checkedData[idx]);
    }
}
