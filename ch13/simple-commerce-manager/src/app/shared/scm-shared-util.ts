// 예제 12-4 ScmSharedUtil 클래스 코드

import * as format from 'date-fns/format';

export declare type ScmDomain = 'product' | 'category';
export declare type ActionMode = 'create' | 'read' | 'edit';

export class ScmSharedUtil {
    static getCurrentDate() {
	return format(new Date(), 'YYYY-MM-DD');
    }

    static getCurrentDateTime() {
	return format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    }
}
