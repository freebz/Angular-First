// 예제 11-32 CategoryRoutingModule 클래스 코드

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryDetailResolverService } from "./category-detail/category-detail-resolver.service";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { CategoryListResolverService } from "./category-management/category-list-resolver.service";
import { CanDeactivateGuardService } from "../shared/can-deactivate-guard.service";
import { SessionAuthGuardService } from "../shared/session-auth-guard.service";

const routes: Routes = [
    { path: 'category-list', children: [
	{
	    path: '',
	    pathMatch: 'full',
	    resolve: { list: CategoryListResolverService },
	    component: CategoryManagementComponent
	},
	{
	    path: 'category/:no',
	    canActivate: [SessionAuthGuardService],
	    resolve: { category: CategoryDetailResolverService },
	    canDeactivate: [CanDeactivateGuardService],
	    component: CategoryDetailComponent
	}
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
	CategoryDetailResolverService,
	CategoryListResolverService
    ]
})
export class CategoryRoutingModule { }
