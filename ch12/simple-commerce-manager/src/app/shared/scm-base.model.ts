// 예제 12-3 ScmBase 클래스 코드

export class ScmBase {
    isUse: boolean;
    createdTime: string;
    updatedTime: string;

    constructor(isUse: boolean, createdTime: string, updatedTime: string) {
	this.isUse = isUse;
	this.createdTime = createdTime;
	this.updatedTime = updatedTime;
    }
}
