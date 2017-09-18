// 예제 6-24 ViewChild로 자식 컴포넌트 요소 탐색

import { Component, ViewChild } from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';

@Component({
    selector: 'test-parent',
    template: '<test-child></test-child>'
})
export class TEstParentComponent {
    @ViewChild(TestChildComponent) testChild: TestChildComponent;
}
