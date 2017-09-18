// 예제 6-25 TestChildComponent

import { Component } from '@angular/core';

@Component({
    selector: '-test-child',
    templateUrl: './test-child.component.html',
    styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
    myOpenState: string = 'let it be'
    private _internalState: string = 'not authroized';

    constructor() { }

    foo() {
	console.log('foo');
    }

    private bar () {
	console.log('bar');
    }

}
