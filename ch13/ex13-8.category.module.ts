// 예제 13-8 카테고리 모듈에 ReactiveFormsModule 추가

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailComponent } from './src/app/category/category-detail/category-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, CategoryRoutingModule, ReactiveFormsModule ],
    declarations: [CategoryManagementComponent, CategoryDetailComponent]
})
export class CategoryModule { }
