// 예제 11-32 CategoryRoutingModule 클래스 코드

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './category-management/category-management.component';

const routes: Routes = [{ path: 'category-list', component: CategoryManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
