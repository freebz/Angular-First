// 예제 9-7 변화 감지 전략 설정

import { Component, OnInit, DoCheck, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    ...
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestOne { ... }
