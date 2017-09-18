// 예제 8-3 ngModel 지시자 소스 일부

// 임포트 생략

@Directive({ ... })
export class NgModel extends NgControl implements OnChanges, OnDestroy {

    // 다른 속성 생략
    @Input('ngModel') model: any;
    @Output('ngModelChange') update = new EventEmitter();
    
    // 메서드 구현부 생략
}
