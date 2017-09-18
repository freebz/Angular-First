// 예제 6-23 comp-comm/src/app/check-list/check-list-result/result-graph/result-graph.component.ts [ch6-7]

import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from '../../check-list-data.service';

@Component({
  selector: 'app-result-graph',
  templateUrl: './result-graph.component.html',
  styleUrls: ['./result-graph.component.css']
})
export class ResultGraphComponent implements OnInit {
    checkedRatio: string = '0%';
    graphToggle = true;

    constructor(public checkListDataService: CheckListDataService) { }

    ngOnInit() {
	this.checkListDataService.changedCntState.subscribe(() => this.printGraph());
    }

    printGraph() {
	this.graphToggle = false;
	this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
	setTimeout(() => this.graphToggle = true, 1);
    }
}
