// 예제 4-3 ng-welcome-msg-app의 AppModule 코드

// 임포트 생략

@NgModule({
    declarations: [
	AppComponent,
	WelcomeMsgComponent,
	LangSelectorComponent,
	LangSelectorBtnPipe
    ],
    imports: [...],
    providers: [I18nSupportService],
    bootstrap: [AppComponent]
})
export class AppModule { }
