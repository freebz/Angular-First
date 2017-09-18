// 예제 11-25 ActivatedRoute의 ActivatedRouteSnapshot 사용

// 생략
constructor(private route: ActivatedRoute) { }

ngOnInit() {
    console.log(this.route.snapshot.params['prodId']);
    console.log(this.route.snapshot.queryParams['key']);
}
// 생략
