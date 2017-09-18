// 예제 3-20 ng-welcome-msg-app/src/app/app.module.ts [ch3-12]

// 임포트 생략

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
