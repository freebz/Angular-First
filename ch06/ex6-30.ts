// 예제 6-30 ngFor와 템플릿 참조 변수를 함께 사용할 때

import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-sample',
    template:`
      <ul>
        <li *ngFor="let item of items" #listItems>{{item.content}}</li>
      </ul>
    `
})
export class AppComponent implements AfterViewInit {
    items: any[];
    @ViewChildren('listITems') itemElems: QueryList<ElementRef>;

    ngAfterViewInit { ... }
}
