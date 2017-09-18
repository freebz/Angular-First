// 예제 13-21 상품 모듈에 ReactiveFormsModule 추가

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { PROD_LIST_PAGE_SIZE } from './product.tokens';
import { ProductBulkUpdaterService } from "./product-management/product-bulk-updater.service";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CheckedProductSetService } from "./product-management/checked-product-set.service";
import { ButtonGroupComponent } from './product-management/button-group/button-group.component';
import { ProductStatusPipe } from './product-status.pipe';

@NgModule({
    imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	NgbPaginationModule,
	ProductRoutingModule
    ],
    declarations: [ProductManagementComponent, ProductDetailComponent, ProductListComponent, ButtonGroupComponent, ProductStatusPipe],
    providers: [
	CheckedProductSetService,
	ProductBulkUpdaterService,
	{provide: PROD_LIST_PAGE_SIZE, useValue: 6}
    ]
})
export class ProductModule { }
