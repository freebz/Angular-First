// 예제 7-20 my-api-gateway.service.ts 1차 개선

import { Injectable, Inject } from '@angular/core';
import { Http, Request, RequestOptionsArgs, Headers } from '@angular/http';

@Injectable()
export class MyApiGatewayService {
    reqOptions: RequestOptionsArgs = {};

    constructor(private _http: Http) {
	this.makeDefaultHttpOption();
    }

    makeDefaultHttpOption() {
	const headerInfo = new Headers();
	headerInfo.set('X-My-Api-Token', 'angular-is-awesome');
	this.reqOptions.headers = headerInfo;
    }

    get(url: string)  {
	return this._http.get(url, this.reqOptions);
    }

    post(url: string, data: any) {
	return this._http.post(url, data, this.reqOptions);
    }

    put(url: string, data: any) {
	return this._http.put(url, data, this.reqOptions);
    }

    delete(url: string) {
	return this._http.delete(url, this.reqOptions);
    }
}
