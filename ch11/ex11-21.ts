// 예제 11-21 ActivatedRoute 사용

// 임포트 생략

@Component({ /* 생략 */ })
export class OptionDetailComponent {
    // 생략

    construcotor( private route: ActivatedRoute ) { }

    ngOnInit() {
	const params = this.route.snapshot.params;
	const prodNo = params.prodNo;
	const optionNo = params.optionNo;
    }
    // 생략
}
