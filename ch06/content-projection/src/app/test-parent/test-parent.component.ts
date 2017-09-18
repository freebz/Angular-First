// 예제 6-34 ContentChild 예제를 위한 TestParentComponent 코드

import { Component, ContentChild, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core'
import { TestChildComponent } from './test-child/test-child.component';

@Component({
    selector: 'test-parent',
    template: `
      <div style="background-color: grey;">
        <h4>In ParentComponent's tpl</h4>
        <ng-content></ng-content>
      </div>
    `,
})
export class TestParentComponent {
    @ContentChild(TestChildComponent) childCmp: TestChildComponent;
    @ViewChild(TestChildComponent) childCmp2: TestChildComponent;

    constructor() { }

    ngAfterContentInit() {
	if(this.childCmp) {
	    this.childCmp.callMe();
	} else {
	    console.log('[ngAfterContentInit] not found childCmp');
	}
    }

    ngAfterViewInit() {
	if(this.childCmp2) {
	    this.childCmp2.callMe();
	} else {
	    console.log('[ngAfterViewInit] not found childCmp2');
	}
    }
}
