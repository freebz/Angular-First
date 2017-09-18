// 예제 7-15 RxJS zip 연산자를 활용한 Observable 조합

untilFive$ = Rx.Observable.interval(1000).take(5);

const num$ = Rx.Observable.from[1,2,3,4,5,6,7,8,9,10].map(n => n * 2);

Observable.zip(num$, untilFive$, (num, int) => num).subscribe(n => console.log(n));
