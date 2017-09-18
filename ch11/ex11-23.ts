// 예제 11-23 컴포넌트에서 Router 사용

this.someApiService
    .postData(/* 생략 */)
    .subscribe(
	() => {
	    /* API 호출 성공 후 처리 로직 */
	    this.router.navigate([ /* API 호출 성공 후 리다이렉트할 URL */]);
	},
	() => { /* 실패 처리 */ }
    );
