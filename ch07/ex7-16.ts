// 예제 7-16 RxJS를 활용한 일정 간격 마우스 위치 로그 기능 구현

this.move$
    .throttleTime(1000)
    .map(evt => [evt.clientX, evt.clientY])
    .subscribe(pos => this.logger.info(`x:${pos[0]} y:{pos[1]}`));
