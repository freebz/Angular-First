// 예제 13-3 CategoryDetailComponent 속성 및 생성자

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

    constructor(private router: Router,
		private route: ActivatedRoute,
		private database: DataStoreService,
		private fb: FormBuilder,
		private toastr: ToastsManager) {
	this.initForm();
    }

    ngOnInit() {
    }
}
