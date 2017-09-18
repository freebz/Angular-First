// 예제 11-32 CategoryRoutingModule 클래스 코드

// import 생략

const routes: Routes = [{ path: 'category-list', component: CategoryManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule { }
