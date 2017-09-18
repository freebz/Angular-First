// 예제 6-3 MouseTrackZoneComponent의 ViewEncapsulation 타입을 Native로 선언

import { Component, Host, Optional, ViewEncapsulation } from '@angular/core';
// 임포트 생략

@Component({
    selector: 'mpl-mouse-track-zone',
    templateUrl: './mouse-track-zone.component.html',
    styleUrls: ['./mouse-track-zone.component.css'],
    providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG} ],
    encapsulation: ViewEncapsulation.Native
})
export class MouseTrackZoneComponent { ... }
