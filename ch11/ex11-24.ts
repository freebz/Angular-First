// 예제 11-24 ActivatedRoute 상태 조회

// 생략

constructor(private route: ActivatedRoute) {}

ngOnInit() {
    this.route.params.subscribe(p => { ... });
    this.route.queryParams.subscribe(q => { ... });
    this.route.fragment.subscribe(f => { ... });
    this.route.data.subscribe(d => { ... });
    this.route.url.subscribe(url => { ... });
}
// 생략
