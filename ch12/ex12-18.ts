// 예제 12-18 모델 생성 메서드

create(domain: ScmDomain, modelCreatorFn: (number) => any) {
    return this.counter.incAndGet(domain)
	.switchMap(no => this.findObject$(domain, no).set(modelCreatorFn(no)));
}
