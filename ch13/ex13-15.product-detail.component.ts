// 예제 13-15 ProductDetailComponent 속성

import { Component, OnInit } from '@angular/core';

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
    }
    
}
