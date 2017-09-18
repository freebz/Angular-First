// 예제 7-10 최초의 RxJS

const subscribeFn = function(observer) {
    observer.next('최초의 RxJS');
};
const myFirstObservable = new Rx.Observable(subscribeFn);

myFirstObservable.subscribe((d) => console.log(d));
