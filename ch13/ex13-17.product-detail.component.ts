// 예제 13-17 ProductDetailComponent의 initForm 메서드 구현부

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

    initForm() {
	this.productForm = this.fb.group({
	    no: [0],
	    name: ['', Validators.required],
	    listPrice: [0,
			Validators.compose([
			    Validators.required,
			    NumberRangeValidator.min(1000),
			    NumberRangeValidator.max(1000000),
			    Validators.pattern('[1-9]\\d*')
			])],
	    status: [ProdStatus.NOT_FOR_SALE],
	    catNo: ['0', Validators.required],
	    couponNo: [0],
	    isUse: [true, Validators.required],
	    qty: [0,
		  Validators.compose([
		      Validators.required,
		      NumberRangeValidator.min(1),
		      NumberRangeValidator.max(1000),
		      Validators.pattern('[1-9]\\d*')
		  ])
		 ],
	    desc: ['',
		   Validators.compose([
		       Validators.required,
		       Validators.minLength(10),
		       Validators.maxLength(1000)
		   ])
		  ],
	    createdTime: [ScmSharedUtil.getCurrentDateTime()],
	    updatedTime: [''],
	});
    }
					 
}
