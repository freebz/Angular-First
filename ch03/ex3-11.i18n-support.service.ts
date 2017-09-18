// 예제 3-11 ng-welcome-msg-app/src/app/i18n-support-service.ts [ch3-8]

import { Injectable } from '@angular/core';

@Injectable()
export class I18nSupportService {
    private welcomeMsg;

    constructor() {
	this.welcomeMsg = {
	    'ko': '안녕하세요',
	    'en': 'Hello',
	    'jp': '初めまして',
	    'fr': 'Bonjour'
	};
    }

    getWelcomeMsgByCode(userName: string, code: string) {
	const helloMsg = this.welcomeMsg[code];
	return `${helloMsg}, ${userName}!`;
    }
}
