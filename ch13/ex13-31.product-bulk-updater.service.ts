// 예제 13-31 ProductBulkUpdaterService 생성자 코드

import { Injectable } from '@angular/core';

@Injectable()
export class ProductBulkUpdaterService {

    constructor(private database: DataStoreService, private prodSet: CheckedProductSetService) { }

}
