// 예제 13-19 ProductDetailComponent 상품 탐색 관련 메서드 구현부

import { Component, OnInit } from '@angular/core';
import { Product, ProdStatus } from "../product.model";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Categories } from "../../category/category.model";
import { ToastsManager } from "ng2-toastr";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ActionMode, ScmSharedUtil } from "../../shared/scm-shared-util";
import { NumberRangeValidator } from "../../shared/custom-validators";
import { DataStoreService } from "../../shared/data-store.service";


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
    private submitted = false;
    
    constructor(private router: Router,
		private route: ActivatedRoute,
		private database: DataStoreService,
		private fb: FormBuilder,
		private toastr: ToastsManager) {
	this.initForm();
    }

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

    ifFirstItem() {
	return this.prodNo === 1;
    }

    isLastItem() {
	return this.prodNo === this.totalItemCnt;
    }

    goPrevItem() {
	this.router.navigate(['product-list', 'product', this.prodNo - 1]);
    }

    goNextItem() {
	this.router.navigate(['product-list', 'product', this.prodNo + 1]);
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

    private _setActionMode(q) {
	this.actionMode = q['action'];
	switch (this.actionMode) {
	case 'create':
	    this.subTitle = '등록';
	    break;
	case 'edit':
	default:
	    this.subTitle = '수정';
	    break;
	}
    }
					 
}
