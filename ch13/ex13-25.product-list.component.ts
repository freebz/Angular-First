// 예제 13-25 ProductListComponent 체크 박스 관련 메서드

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
	this.fetchResolvedData();
	this.initCheckedProducts();
    }

    toggleAllItem() {
	if ( this.isCheckedAnyOne() ) {
	    this.prodSet.initProdNos();
	}
	else {
	    this.products.map(p => p.no)
		.forEach(no => this.prodSet.addNo(no));
	}

	this.setAllProductsCheckedStatusTo(!this.isCheckedAnyOne());
    }

    checkProduct(idx: number, no: number) {
	this.checkedStatus[idx] = !this.checkedStatus[idx];

	if ( this.checkedStatus[idx] ) {
	    this.prodSet.addNo(no);
	}
	else {
	    this.prodSet.removeNo(no);
	}
    }

    isCheckedAnyOne() {
	return this.checkedStatus.reduce((acc, cur) => cur || acc, false);
    }

    private fetchResolvedData() {
	const resolvedData = <{list: Products}>this.route.snapshot.data;
	this.products = resolvedData.list;
    }

    private initCheckedProducts() {
	this.prodSet.initProdNos();
	this.setAllProductsCheckedStatusTo(false);
    }

    private setAllProductsCheckedStatus(v: boolean) {
	this.checkedStatus = [];

	const curItem = this.pageSize > this.totalItemCnt ? this.totalItemCnt : this.pageSize;
	Observable.range(0, curItem).subscribe(i => this.checkedStatus[i] = v);
    }
}
