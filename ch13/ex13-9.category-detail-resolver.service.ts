// 예제 13-9 CategoryDetailResolverService 코드

import { Injectable } from '@angular/core';

@Injectable()
export class CategoryDetailResolverService implements Resolve<Category> {

    constructor(private database: DataStoreService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
	if (route.queryParams['action'] === 'create' ) return null;

	return this.database
	    .findObjectSnapshot('category', route.params['no'])
	    .map((snapshot: firebase.database.DataSnapshot) => {
		if (snapshot.exists() ) {
		    return snapshot.val();
		}

		this.router.navigate(['/category-list']);
		return null;
	    });
    }
}
