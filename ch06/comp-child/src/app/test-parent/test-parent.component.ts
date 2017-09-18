// test-parent.component.ts

import { Component, ViewChildren, QueryList } from '@angular/core'
import { TestChildComponent } from './test-child/test-child.component';

@Component({
    selector: 'test-parent',
    template: `
    <ol>
      <li *ngFor="let num of checkListNums">
        <test-child></test-child>
      </li>
    </ol>
    <div>
      <button type="button" (click)="checkedAll()">Check All</button>
      <button type="button" (click)="unCheckedAll()">Uncheck All</button>
    </div>
        `
})
export class TestParentComponent {
    checkListNums: number[];
    @ViewChildren(TestChildComponent) testChild: QueryList<TestChildComponent>;

    constructor() {
	this.checkListNums = [1, 2, 3];
    }

    checkedAll() {
	this.testChild.map((comp) => comp.isChecked = true);
    }

    unCheckedAll() {
	this.testChild.map((comp) => comp.isChecked = false);
    }

}
