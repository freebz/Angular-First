// 예제 7-14 RxJS의 reduce 연산자 활용

const num$ = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);

num$
    .filter(n => n % 2 === 0)
    .reduce((acc, val) => acc + val, 0)
    .subscribe(res => console.log(`result: ${res}`));
