// 예제 6-40 DoCheck 활용

import { Component, ViewChild, ElementRef, AfterViewInit, DoCheck } from '@angular/core';
declare var jQuery;

@Component({
  selector: 'sample-app',
  template: `
  <h2>DoCheck and External Lib</h2>
  <input type="text" #myInput />
  <span *ngIf="isChristmas">Wow Christmas!!!</span>
  `,  
})
export class AppComponent implements AfterViewInit, DoCheck {
    curDate: string = "";
    oldDate: string = "";
    chkCounter: number = 0;
    isChristmas: boolean
    @ViewChild('myInput') myInput: ElementRef;

    constructor() { }

    ngAfterViewInit() {
	jQuery(this.myInput.nativeElement).datepicker();
    }

    ngDoCheck() {
	this.curDate = this.myInput.nativeElement.value;
	if(this.oldDate !== this.curDate) {
	    console.log(`cur date changed: ${this.curDate}`);
	    this.oldDate = this.curDate;
	    console.log(`chk counter: ${this.chkCounter}`);
	    this.chkChristmas();
	}
	this.chkCounter++;
    }

    chkChristmas() {
	const result = this.curDate.match(/12\/25\/[0-9]{4}/);
	this.isChristmas = result && result.length === 1;
    }
    
}
