// 예제 4-5 앵귤러의 선언적 방식

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
	<label for="chk-btn">선언적 방식</label>
	<input type="checkbox" id="confirm-checkbox1" [(ngModle)]="isConfirmed1"/>
	<input type="checkbox" id="confirm-checkbox2" [(ngModle)]="isConfirmed2"/>
	...
    `,
})
export class AppComponent {
    isConfirmed1: boolean;
    isConfirmed2: boolean;

    어떤_비지니스_로직을_담은_메서드() {
	//...
	const isAllConfirmed = isConfirmed1 && isConfirmed2;
	if ( isAllConfirmed ) {
	    // 검증에 통과하여 다음 로직 수행
	}
	//...
    }
}
