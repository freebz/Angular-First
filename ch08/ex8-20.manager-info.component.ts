// 예제 8-20 product-manager/src/app/manager-info/manager-info.components.ts [ch8-5]

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pm-manager-info',
  templateUrl: './manager-info.component.html',
  styleUrls: ['./manager-info.component.css']
})
export class ManagerInfoComponent implements OnInit {
    @Input() idx: number;
    @Input() manager;
    
    constructor() { }

    ngOnInit() { }

}
