// 예제 3-10 ng-welcome-msg-app/src/app/lang-selector/lang-selector.component.ts [ch3-7]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
    langCode: string;

    constructor() {
	this.langCode = 'ko';
    }
    
    ngOnInit() {
    }
    
    setLangCode(code: string) {
	this.langCode = code;
    }
}
