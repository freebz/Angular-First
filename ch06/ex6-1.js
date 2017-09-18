// 예제 6-1 MouseTrackZoneComponent 클래스의 스타일 선언 정보

@Component({
    selector: 'mpl-mouse-track-zone',
    templateUrl: './mouse-track-zone.component.html',
    styleUrls: ['./mouse-track-zone.component.css'],
    providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG} ]
})
export class MouseTrackZoneComponent { ... }
