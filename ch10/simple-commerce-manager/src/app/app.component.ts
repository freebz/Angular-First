// 예제 10-17 app.component.ts 수정 코드

import { Component } from '@angular/core';
import { SidebarMenu } from './sidebar/sidebar.component'

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    currentMenu: SidebarMenu;
}
