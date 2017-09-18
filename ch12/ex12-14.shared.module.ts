// 예제 12-14 SharedModule 클래스 코드

import { NgModule } from '@angular/core';
import { NoCounterService } from './no-counter.service';

@NgModule({ providers: [ NoCounterService ] })
export class SharedModule { }
