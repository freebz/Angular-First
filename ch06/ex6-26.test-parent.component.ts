// 예제 6-26 ViewChildren을 활용한 예제 전체 코드

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


// test-child.component.ts
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'test-child',
    template: `
    <label>check me</label><input type="checkbox" [(ngModel)]="isChecked">
    `
})
export class TestChildComponent {
    isChecked: boolean;

    constructor() {
	this.isChecked = false;
    }
    
}
