// 예제 11-29 루트 모듈의 라우팅 설정

const routes: Routes = [ /* 생략 */ ];
@NgModule({
    ...
    imports: [ RouterModule.forRoot(routes) ],
    ...
})
export class AppRoutingModule {}
