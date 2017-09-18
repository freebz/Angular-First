// 예제 7-18 MyApiGatewayService 최초 생성 버전

import { Injectable } from '@angular/code';
import { Http } from '@angular/http';

@Injectable()
export class MyApiGatewayService {
    constructor(private _http: Http) {}

    get(url: string) {
	return this._http.get(url)
    }

    post(url: string, data: any) {
	return this._http.put(url, data);
    }

    delete(url: string) {
	return this._http.delete(url);
    }
}
