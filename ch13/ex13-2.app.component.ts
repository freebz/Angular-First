// 예제 13-2 ng2-toastr 설정을 추가한 AppComponent

import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private toastr: ToastsManager, vRef: ViewContainerRef) {
	this.toastr.setRootViewContainerRef(vRef);
    }
}
