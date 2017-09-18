// 예제 13-32 ProductBulkUpdaterService의 판매/판매중지 메서드 코드

import { Injectable } from '@angular/core';

@Injectable()
export class ProductBulkUpdaterService {

    constructor(private database: DataStoreService, private prodSet: CheckedProductSetService) { }

    updateProductsToSell() {
	return this.updateStatus(ProdStatus.ON_SALE);
    }

    updateProductsToStop() {
	return this.updateStatus(ProdStatus.NOT_FOR_SALE);
    }

    private updateStatus(status: ProdStatus) {
	const modifyProductFn = (prod: Product) => {
	    prod.status = status;
	    return prod;
	};

	return this._bulkUpdate(modifyProductFn);
    }
}
