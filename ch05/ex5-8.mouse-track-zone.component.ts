// 예제 5-8 mouse-pos-logger/src/app/mouse-track-zone/mouse-track-zone.component.ts [ch5-4]

import { Component, OnInit } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css']
})
export class MouseTrackZoneComponent implements OnInit {
    logLevel: LogLevel = LogLevel.INFO;
    logger: MySpecialLoggerService;

    constructor() {
	this.logger = new MySpecialLoggerService(this.logLevel);
    }
    // 메서드 구현부 생략
}
