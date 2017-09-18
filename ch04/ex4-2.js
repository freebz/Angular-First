// 예제 4-2 templateUrl을 선언한 WelcomeMsgComponent 코드

...
@Component({
    selector: 'welcome-msg',
    templateUrl: './welcome-msg.component.html',
    styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit { ... }
