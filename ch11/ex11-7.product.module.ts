// 예제 11-7 ProductManagementComponent가 추가된 ProductModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductManagementComponent]
})
export class ProductModule { }
