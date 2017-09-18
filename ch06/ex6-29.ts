// 예제 6-29 ViewChild를 사용하여 특정 DOM 바인딩

import { Component, ViewChild, ViewChildren, ElementRef,
	 QueryList, AfterViewInit } from '@angular/core';

@Component({ ... })
export class AppComponent implements AfterViewInit {
    @ViewChild('myInput') myInput: ElementRef;
    @ViewChildren('myInput') myInputs: QueryList<ElementRef>;

    ngAfterViewInit() {
	// 이때 바인딩이 이루어짐
    }

    // ...
}
