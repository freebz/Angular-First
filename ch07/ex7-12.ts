// 예제 7-12 RxJS의 map 연산자 활용

const num$ = Rx.Observable.from([1,2,3,4,5,6,7,8,9,10]);

num$
    .map(n => n * 2)
    .subscribe(n => console.log(`num: ${n}`));
