// 예제 13-16 ProductDetailComponent ngOnInit 구현부

import { Component, OnInit } from '@angular/core';

import { Categories } from "../../category/category.model";

import { FormGroup } from "@angular/forms";
import { ActionMode } from "../../shared/scm-shared-util";


@Component({
  selector: 'scm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    subTitle;
    actionMode: ActionMode;
    productForm: FormGroup;
    usedCats: Categories;
    private prodNo: number;
    private totalItemCnt;
    
    constructor() { }

    ngOnInit() {
	this.route.queryParams.filter(q => q['action'] !== undefined)
	    .do(q => this._setActionMode(q))
		.switchMap(q => this.route.data)
	    .map((data: {detail: any}) => data.detail)
	    .subscribe(data => {
		const prod: Product = data[0];
		this.prodNo = prod.no;
		this.productForm.patchValue(prod);
		this.usedCats = data[1];
	    });

	this.database.count('product').subscribe(cnt => this.totalItemCnt = cnt);
    }
    
}
