// 예제 13-4 initForm, resetForm 메서드 구현

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

    initForm() {
	this.categoryForm = this.fb.group({
	    no: [0],
	    name: ['', Validators.required],
	    desc: ['', Validators.compose([Validators.required, Validators.minLength(5),
					   Validators.maxLength(100)])],
	    isUse: [true, Validators.required],
	    createdTime: [ScmSharedUtil.getCurrentDateTime()],
	    updatedTime: [''],
	});
    }

    resetForm(cat: Category) {
	this.categoryForm.reset({
	    no: { value: cat.no, disabled: true },
	    name: { value: cat.name, disalbed: true },
	    desc: { value: cat.desc, disabled: true },
	    isUse: { value: cat.isUse, disabled: true },
	    createdTime: { value: cat.createdTime, disabled: true },
	    updatedTime: { value: cat.updatedTime, disabled: true },
	});
    }

    ngOnInit() {
    }
}
