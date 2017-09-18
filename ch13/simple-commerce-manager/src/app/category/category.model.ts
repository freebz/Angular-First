// 예제 12-6 카테고리 도메인 모델 Category 클래스 코드

import { ScmBase } from "../shared/scm-base.model";
import { ScmSharedUtil } from "../shared/scm-shared-util";

export declare type Categories = Category[];

export class Category extends ScmBase {
    no: number;
    name: string;
    desc: string;

    constructor(no: number) {
	super(true, ScmSharedUtil.getCurrentDateTime(), '');
	this.no = no;
    }
}
