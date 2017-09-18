// 예제 6-37 SimpleChange 타입 구현 코드

export class SimpleChange {
    constructor(public previousValue: any, public currentValue: any) {}
    isFirstChange(): boolean { return this.previousValue === UNINITIALIZED; }
}

export const UNINITIALIZED = {
    toString: () => 'CD_INIT_VALUE'
};
