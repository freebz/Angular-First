// 예제 6-4 comp-comm/src/app/check-list/check-list.component.ts [ch6-1]

import { Component, OnInit } from '@angular/core';

@Component({ ... })
export class CheckListComponent implements OnInit {
    checkList: string[];
    checkedResult: boolean[] = [];

    constructor() {
	this.checkList = [
	    'check list one',
	    'check list two',
	    'check list three',
	    'check list four'
	];
	this.checkList.forEach(() => this.checkedResult.push(false));
    }

    ngOnInit() {
    }
}
