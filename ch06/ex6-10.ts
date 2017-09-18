// 예제 6-10 부모 컴포넌트에서 이벤트 바인딩으로 상태 전달받기

@Component({
    template:`<test-child [myAnotherState]="myState"
        [clonedVal]="uniqueVal" (onChangeChildData)="receiveData($event)"></test-child>`
})
export class TestParentComponent {
    myState;
    uniqueVal;

    constructor() {}

    receiveData(resultVal) {
	console.log(`자식 컴포넌트로부터 전달된 데이터: ${resultVal}`);
    }
}
