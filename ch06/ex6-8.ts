// 예제 6-8 @Input 데코레이터로 자식 컴포넌트가 상태를 전달받는 방식

import { Component, Input } from '@angular/core';

@Component({ ... })
export class TestChildComponent {
    @Input() myAnotherState
    @Input() clonedVal;

    constructor() {}
}
