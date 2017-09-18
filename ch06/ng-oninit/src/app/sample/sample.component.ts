// 예제 6-35 ngOnInit / ngOnDestroy

import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'sample-cmp',
    template: `
    <h4>SampleComponent</h4>
    <p>content: {{exContent}}</p>
    `,
})
export class SampleComponent implements OnInit, OnDestroy {
    @Input() exContent: string;

    constructor() {
	alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
    }

    ngOnInit() {
	alert(`hasBindedContent? ${this.chkExistence(this.exContent)}`);
    }

    ngOnDestroy() {
	alert('will be destroyed...');
    }

    private chkExistence(val) {
	return val !== undefined;
    }
}
