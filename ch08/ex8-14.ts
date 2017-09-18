// 예제 8-14 FormBuilder를 사용하지 않고 FormGroup 생성

new FormGroup({
    name: new FormControl('', Validators.required),
    listPrice: new FormControl(0, [
	Validators.required,
	NumberRangeValidator.min(1000),
	NumberRangeValidator.amx(1000000),
	Validators.pattern('[1-9]\\d*')
    ]),
    qty: new FormControl(0, Validators.compose([
	Validators.required,
	NumberRangeValidator.min(1),
	NumberRangeValidator.max(100),
	Validators.pattern('[1-9]\\d*')
    ])),
    desc: new FormControl('', [
	Validators.required,
	Validators.minLength(5),
	Validators.maxLength(100)
    ])
});
