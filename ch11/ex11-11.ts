// 예제 11-11 Route 배열인 Routes 선언

const routes: Routes = [
    {path: 'hello', component: HelloComponent},
    {path: 'data-list', children: [
	{path: '', component: DataListComponent},
	{path: ':id', component: DataComponent},
    ]},
    {path: 'main-page', component: MainComponent},
    {path: '', redirectTo: 'main-page', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
