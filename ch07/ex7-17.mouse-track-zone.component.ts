// 예제 7-17 RxJS를 활용한 마우스의 움직임

// 임포트 생략
import { Observable } from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';

@Component({ ... })
export class MouseTrackZoneComponent implements OnInit {
    logger: LoggerService;
    moveSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
    move$: Observable<MouseEvent> = this.moveSubject.asObservable();

    constructor(
	@Host() @Optional() mySpecialLogger: MySpecialLoggerService,
	anotherLogger: AnotherLoggerService
    ) {
	this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
    }
    
    ngOnInit() {
	this.move$
	    .throttleTime(1000)
	    .map(evt => [evt.clientX, evt.clientY])
	    .subscribe(pos => this.logger.info(`x:${pos[0]} y:${pos[1]}`));
    }

    captureMousePos($event: MouseEvent) {
	this.logger.debug('click event occured');
	this.moveSubject.next($event);
    }
}
