// 예제 13-21 상품 모듈에 ReactiveFormsModule 추가

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    imports: [ CommonModule, ProductRoutingModule, ReactiveFormsModule ],
    declarations: [ProductManagementComponent, ProductDetailComponent]
})
export class ProductModule { }
