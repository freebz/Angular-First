// 예제 11-30 기능 모듈 전용 라우터 설정

// import 생략

const routes: Routes = [{ path: 'product-list', component: ProductManagementComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductRoutingModule { }
