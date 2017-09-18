// 예제 12-17 DataService 목록 조회 구현

findList$(domain: ScmDomain) {
    return this.db.list(`/${domain}`);
}

findList$ByQuery(domain: ScmDomain, queryKey: string, queryVal: any) {
    const option: FirebaseListFactoryOpts = {query: {orderByChild: queryKey, equalTo: queryVal}};
    return this._findListByOpt(domain, option).take(1);
}

findList$ByPage(domain: ScmDomain, pageNo, pageSize, totalCnt) {
    const offset = totalCnt - pageSize * (pageNo - 1);
    const option: FirebaseListFactoryOpts = {
	query: {
	    orderByChild: 'no',
	    endAt: offset,
	    limitToLast: pageSize
	}
    };
    return this._findListByOpt(domain, option);
}

private _findListByOpt(domain: ScmDomain, option: FirebaseListFactoryOpts) {
    return this.db.list(`/${domain}`, option);
}
