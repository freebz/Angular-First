// 예제 12-12 번호 증가 트랜잭션 메서드 incAndGet

incAndGet(domain: ScmDomain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err, comitted, dataSnapshot) => {
	if ( err ) throw new Error(`failed to increase number`);

	if ( comitted ) {
	    id$.emit(dataSnapshot.val());
	    id$.complete();
	}
    };
    this._getNumber$(domain).$ref.transaction(num => (num || 0) + 1, onComplete);

    return id$;
}
