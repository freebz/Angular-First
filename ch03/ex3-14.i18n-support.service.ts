// 예제 3-14 ng-welcome-msg-app/src/app/i18n-support.service.ts [ch3-9]

import { Injectable } from '@angular/core';

@Injectable()
export class I18nSupportService {
    langCode = 'ko';
    private welcomeMsg;

    constructor() {
	this.welcomeMsg = {
	    'ko': '안녕하세요',
	    'en': 'Hello',
	    'jp': '初めまして',
	    'fr': 'Bonjour'
	};
    }

    getWelcomeMsg(userName: string) {
	const helloMsg = this.welcomeMsg[this.langCode];
	return `${helloMsg}, ${userName}!`;
    }
}
