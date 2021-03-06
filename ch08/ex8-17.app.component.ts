// 예제 8-17 product-manager/src/app/app.component.ts [ch8-4]

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NumberRangeValidator } from "./custom-validators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = '상품 등록';
    prodForm: FormGroup;

    constructor(public fb: FormBuilder) {
	this.prodForm = this.fb.group({
	    name: ['', Validators.required],
	    listPrice: [0,
			Validators.compose([
			    Validators.required,
			    NumberRangeValidator.min(1000),
			    NumberRangeValidator.max(1000000),
			    Validators.pattern('[1-9]\\d*')
			])
		       ],
	    qty: [0, [
		Validators.required,
		NumberRangeValidator.min(1),
		NumberRangeValidator.max(100),
		Validators.pattern('[1-9]\\d*')
	    ]],
	    desc: ['', [
		Validators.required,
		Validators.minLength(5),
		Validators.maxLength(100)
	    ]],
	});
    }
    
    onSubmit() {
	alert(`제출\n${JSON.stringify(this.prodForm.value)}`);
    }
}
