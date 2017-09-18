// 예제 3-13 ng-welcome-msg-app/src/app.app.module.ts [ch3-8]

// 다른 임포트 생략
import { I18nSupportService } from './i18n-support.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
