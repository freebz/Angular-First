// 예제 12-16 DataStoreService 객체 조회 구현

findObject$(domain: ScmDomain, no: number) {
    return this._findObject(domain, no, false);
}

findObjectSnapshot(domain: ScmDomain, no: number) {
    return this._findObject(domain, no, true).take(1);
}

private _findObject(domain: ScmDomain, no: number, isSnapshot: boolean) {
    if ( isSnapshot ) {
	return this.db.object(`/${domain}/${no}`, {preserveSnapshot: true});
    }
    return this.db.object(`/${domain}/${no}`);
}
