// 예제 3-3 ng-welcome-msg-app/src/app.app.components.ts [ch3-2]

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName = "";

    setName(name) {
	this.userName = name;
    }
}
