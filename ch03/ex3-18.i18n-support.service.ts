// 예제 3-18 ng-welcome-msg-app/src/app/i18n-support.service.ts [ch3-10]

import { Injectable } from '@angular/core';
import { LANG_METADATA } from './lang-metadata';

@Injectable()
export class I18nSupportService {
    langCode = 'ko';

    constructor() { }

    getWelcomeMsg(userName: string) {
	const langData = LANG_METADATA.find(lang => lang.code === this.langCode);
	return `${langData.msg}, ${userName}!`;
    }
}
