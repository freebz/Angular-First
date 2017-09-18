// 예제 6-5 comp-comm/src/app/check-list/check-list-result/check-list-result.component.ts [ch6-1]

import { Component, OnInit } from '@angular/core';

@Component({ ... })
export class CheckListResultComponent implements OnInit {
    checkedCnt: number;
    checkedResult: string[];
    
    constructor() {
	this.initResult();
    }
    
    ngOnInit() {
    }

    private initResult() {
	this.checkedCnt = 0;
	this.checkedResult = [];
    }
}
