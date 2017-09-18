// 예제 8-1 AbstractControl 소스 일부

export abstract class AbstractControl {
    /** @internal */
    _value: any;
    /** @internal */
    _onCollectionChnage = () => {};

    private _valueChanges: EventEmitter<any>;
    private _statusChanges: EventEmitter<any>;
    private _status: string;
    private _errors: {[key: string]: any};
    private _pristine: boolean = true;
    private _touched: boolean = false;
    private _parent: FormGroup|FormArray;
    private _asyncValidationSubscription: any;
    /* 메서드 생략 */
}
