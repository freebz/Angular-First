// 예제 13-11 CateogryManagementComponent 속성 및 생성자

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
    categories: Categories;
    totalItemCnt: number = 0;
    pageSize: number;
    pageNo: number = 1;
    
    constructor(private route: ActivateRoute,
		private database: DataStoreService,
		@Inject(CAT_LIST_PAGE_SIZE) pageSize: number) {
	this.pageSize = pageSize;
    }
    
    ngOnInit() { }
}
