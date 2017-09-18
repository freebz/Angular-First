// 예제 11-3 AppModule에서 핵심 모듈로 분리할 대상 요소

// 임포트 생략

@NgModule({
    declarations: [
	AppComponent,
	NavbarComponent,
	SidebarComponent,
	FooterComponent
    ],
    ...
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
