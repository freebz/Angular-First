// 예제 13-22 ProducctDetailResolverService resolve 메서드 코드

import { Injectable } from '@angular/core';

@Injectable()
export class ProductDetailResolverService {

    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
	const objectSnapshot$ = this.database.findObjectSnapshot('product', route.params['no'])
	    .map((snapshot: firebase.database.DataSnapshot) => snapshot.exists() ? snapshot.val() : null);
	const usedCat$ = this.database.findList$ByQuery('category', 'isUse', true);

	const action = route.queryParams['action'];
	if ( action === 'create' ) {
	    return usedCat$.map(cats => [new Product(0, ProdStatus.WAIT_FOR_SALE), cats]);
	}

	return Observable.zip(objectSnapshot$, usedCat$).map(data => {
	    if ( data[0] === null ) {
		this.router.navigate(['/product-list']);
		return null;
	    }

	    return data;
	})
    }
}
