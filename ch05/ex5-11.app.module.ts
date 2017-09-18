// 예제 5-11 mouse-pos-logger/src/app/app.module.ts [ch5-6]

// 임포트 생략
import { LogLevel } from './log-level.enum';

@NgModule({
  declarations: [...],
  imports: [...],
    providers: [MySpecialLoggerService, {provide: 'logLevel', useValue: LogLevel.INFO}],
  bootstrap: [AppComponent]
})
