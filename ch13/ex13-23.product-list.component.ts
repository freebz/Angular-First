// 예제 13-23 ProductListComponent 속성 및 생성자

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Products;
    @Input() totalItemCnt: number = 0;
    pageNo: number = 1;
    pageSize: number;
    checkedStatus: boolean[];

    constructor(private route: ActivatedRoute,
		private prodSet: CheckedProductSetService
		private database: DataStoreService,
		@Inject(PROD_LIST_PAGE_SIZE) pageSize: number) {
	this.pageSize = pageSzie;
    }

  ngOnInit() {
  }

}
