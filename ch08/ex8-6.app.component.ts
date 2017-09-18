// 예제 8-6 product-manager/src/app/app.component.ts [ch8-1]

// 임포트 생략
@Component({ ... })
export class AppComponent {
    title = '상품 등록';
    product: any;

    constructor() {
	this.initProduct();
    }

    initProduct() {
	this.product = { name: '', listPrice: '', qty: 0, desc: '' };
    }

    onSubmit() {
	alert(`제출\n${JSON.stringify(this.product)}`);
    }

    onReset() {
	this.initProduct();
    }
}
