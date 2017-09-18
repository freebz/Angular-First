// 예제 6-19 comp-comm/src/app/check-list/check-list-result/result-graph/result-graph.component.ts [ch6-6]

import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from '../../check-list-data.service';

@Component({ ... })
export class ResultGraphComponent implements OnInit {
    checkedRatio: string = '0%';
    graphToggle = true;

    constructor(public checkListDataService: CheckListDataService) { }

    ngOnInit() { }

    onPrintGraph() {
	this.graphToggle = false;
	this.checkedRatio = this.checkListStatisticsService.getCheckedItemRatioText();
	setTimeout(() => this.graphToggle = true, 1);
    }
}
