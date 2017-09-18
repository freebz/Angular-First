// 예제 6-13 comp-comm/src/app/check-list/check-list-result/check-list-result.component.ts [ch6-3]

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cc-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrls: ['./check-list-result.component.css']
})
export class CheckListResultComponent implements OnInit {
    checkedCnt: number;
    @Input() checkedResult: string[];
    constructor() { }
    ngOnInit() { }
}
