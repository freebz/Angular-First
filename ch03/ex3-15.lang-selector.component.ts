// 예제 3-15 ng-welcome-msg-app/src/app/lang-selector/lang-selector.component.ts [ch3-9]

constructor(public i18nSupporter: I18nSupportService) {
    this.langCode = i18nSupporter.langCode;
}

ngOnInit() { }
    
setLangCode(code: string) {
    this.langCode = code;
    this.i18nSupporter.langCode = code;
}
