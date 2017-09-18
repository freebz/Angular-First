// 예제 6-31 템플릿에서 직접 참조 변수를 사용할 때

import { Component } from '@angular/core'

@Component({
    selector: 'sample-app',
    template: `
      <div>
        <input type="text" id="n-1" #keyInput (keyup)="leaveKeyLog($event,keyInput.value)" />
        <div>INPUT[id="{{keyInput.id}}"] your current input: {{keyInput.value}}</div>
        <div>INPUT[id="{{keyInput.id}}"] all inputs: {{logs | json}}</div>
      </div>
      <div>
        more attributes of INPUT[id="{{keyInput.id}}"] <br/>
        type: {{keyInput.type}} <br/>
        isRequired: {{keyInput.required}} <br/>
        isDisalbed: {{keyInput.disabled}} <br/>
        ...
      </div>
    `,
})
export class AppComponent {
    logs: number[];

    constructor() {
	this.logs = [];
    }

    leaveKeyLog(evt, num: number) {
	if(evt.keyCode === 13) {
	    this.logs.push(num);
	    evt.target.value = '';
	}
    }
}
