// 예제 8-15 FormBuilder를 사용한 FormGroup 생성

this.formBuilder.group({
    name: ['', Validators.required],
    listPrice: [0,
		Validators.compose([
		    Validators.required,
		    NumberRangeValidator.min(1000),
		    NumberRangeValidator.max(1000000),
		    Validators.pattern('[1-9]\\d*')
		])
	       ],
    qty: [0, [
	Validators.required,
	NumberRangeValidator.min(1),
	NumberRangeValidator.max(100),
	Validators.pattern('[1-9]\\d*')
    ]]
    desc: ['', [
	Validators.required,
	Validators.minLength(5),
	Validators.maxLength(100)
    ]]
});
