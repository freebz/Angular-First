// 예제 13-27 CheckedProductSetService 속성 및 생성자

import { Injectable } from '@angular/core';

@Injectable()
export class CheckedProductSetService {
    prodNoSet = new Set();
    hasNo$: Observable<boolean>;
    private hasNoSubject: Subject<boolean> = new BehaviorSubject(false);
    

    constructor() {
	this.hasNo$ = this.hasNoSubject.asObservable();
    }

}
