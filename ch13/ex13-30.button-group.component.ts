// 예제 13-30 ButtonGroupComponent 주요 코드

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
    noneNo$: Observable<boolean>;
    @Output() onClicked: EventEmitter<string> = new EventEmitter();
    
    constructor(private router: Router, private prodSet: CheckedProductSetService) { }

    ngOnInit() {
	this.mapNoneKeyObservable();
    }

    private mapNoneKeyObservable() {
	this.noneNo$ = this.prodSet.hasNo$.map(hasNo => !hasNo);
    }
}
