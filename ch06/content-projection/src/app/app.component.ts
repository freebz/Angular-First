// 예제 6-33 ContentChild 사용 예제의 AppComponent 코드

import { Component } from '@angular/core';

@Component({
    selector: 'sample-app',
    template: `
      <div style="background-color:yellow;">
        <h4>In AppComponent's tpl</h4>
        <test-parent>
          <div style="background-color: red;">
            <h4>In AppComponent's content projected tpl</h4>
          </div>
          <test-child></test-child>
        </test-parent>
      </div>
    `,
})
export class AppComponent {
    constructor() { }
}
