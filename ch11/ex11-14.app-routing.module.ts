// 예제 11-14 SCM의 AppRoutingModule 라우터 선언부

// import 생략
const routes: Routes = [
    { path: 'product-list', component: ProductManagementComponent },
    { path: 'category-list', component: CategoryManagementComponent },
    { path: 'total-summary', component: MainDashboardComponent },
    { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
