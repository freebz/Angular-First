// 예제 5-13 컴포넌트의 마우스 클릭 시 로그 기능 테스트 케이스

it('마우스 클릭할 때마다 로그가 적재되어야 한다', () => {
    expect(component).toBeTruthy();

    const trackZone = fixture.debugElement.query(By.css('.track-zone'));
    trackZone.triggerEventHandler("click", { clientX: 1, clientY: 1 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(1);

    trackZone.triggerEventHandler("click", { clientX: 100, clientY: 10 });
    trackZone.triggerEventHandler("click", { clientX: 200, clientY: 150 });
    expect((<MySpecialLoggerService>component.logger).logs.length).toEqual(3);
});
