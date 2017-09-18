// 예제 11-22 컴포넌트 클래스에서 Router 사용

// 임포트 생략
import { Router } from "@angular/router";

export class SomeComponent {
    constructor(router: Router) { }

    moveToOtherView( ) {
	// 뷰 전환 전에 작업할 로직
	this.router.navigate(['products', prod.no, 'test']);
    }
    // 생략
}
