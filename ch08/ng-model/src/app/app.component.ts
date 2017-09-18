// 예제 8-2 폼의 NgModel Validation

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'sample-app',
  template: `
  <p>
    <label for="test-input">NgModel: </label>
    <input type="text" id="test-input"
[(ngModel)]="myData" #myModel="ngModel" required pattern="010-[0-9]{4}-[0-9]{4}">
    <span class="result">{{myData}}</span>
  </p>
  <label for="is-valid">유효?: </label><span id="is-valid">{{myModel.valid}}</span>
  `,
  styles: [`
    .ng-valid { border: 2px solid lawngreen; }
    .ng-invalid:not(form) { border: 2px solid orangered; }
    .result { margin-left: 5px; }
  `]
})
export class AppComponent implements OnInit {
    myData: any;
    @ViewChild('myModel') myNgModel: NgModel;
    validResult: boolean;

    ngOnInit() {
	this.myNgModel.valueChanges.subscribe(v => console.log(`value: ${v}`));
	this.myNgModel.statusChanges.subscribe(s => console.log(`status: ${s}`));
    }

    checkValid() {
	this.validResult = this.myNgModel.valid;
    }
}
