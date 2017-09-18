// 예제 5-10 mouse-pos-logger/src/app/mouse-track-zone/mouse-track-zone.component.ts [ch5-5]

import { Component, OnInit, Input } from '@angular/core';
// 임포트 생략

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
    @Input() private logger: MySpecialLoggerService;

    constructor() { }
    ...
}
