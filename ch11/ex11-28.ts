// 예제 11-28 컴포넌트에서 Resolve 가드의 데이터 사용

export class ProductDetailComponent implements OnInit {
    product: Product;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
	this.route.data.subscribe((data: {product: Product}) => {
	    console.dir(data.product);
	    this.product = data.product;
	});
    }
    
