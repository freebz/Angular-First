// 예제 13-46 CanDeactivateGuardService 클래스 코드

import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";
import { Observable } from 'rxjs/Observable';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
	return component.canDecativate ? component.canDeactivate() : true;
    }
}
