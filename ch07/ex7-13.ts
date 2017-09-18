// 예제 7-13 RxJS의 filter 연산자 활용

const num$ = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);

num$
    .filter(n => n % 2 === 0)
    .subscribe(n => console.log(`log: ${n}`));
