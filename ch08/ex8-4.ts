// 예제 8-4 양방향 바인딩 문법 사용

<some-component [(myData)]="parentModelData"></some-component>

export class SomeComponent {
    @Input() myData: any;
    @Output() myDataChange: EventEmitter<any> = new EventEmitter();
}
