// 예제 13-26 ProductListResolverService resolve 메서드 코드

import { Injectable } from '@angular/core';

@Injectable()
export class ProductListResolverService {

    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	return this.database.count('products')
	    .switchMap(cnt => this.database.findList$ByPage('product', 1, this.pageSize, cnt))
	    .do((list: Products) => list.sort((p1, p2) => p2.no - p1.no))
		.take(1);
    }

}
