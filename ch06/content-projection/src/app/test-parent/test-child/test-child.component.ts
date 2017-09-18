import { Component } from '@angular/core'

@Component({
    selector: 'test-child',
    template: `
      <div style="background-color: skyblue;">
        <h4>In ChildComponent's tpl</h4>
      </div>
    `,
})
export class TestChildComponent {
    constructor() { }

    callMe() {
	console.log('here is child component');
    }
}
