// 예제 6-9 자식 컴포넌트에서 @Output으로 상태를 전달하는 방식

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ ... })
export class TestChildComponent {
    @Input() myAnotherState
    @Input() clonedVal;
    @Output() onChangeChildData = new EventEmitter<number>();

    constructor() {}

    changeMyData() {
	// 비즈니스 로직
	const resultVal = 8712;
	this.onChangeChildData.emit(resultVal);
    }
}
