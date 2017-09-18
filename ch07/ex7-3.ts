// 예제 7-3 HttpService 주입

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
    constructor(public http: Http) { }
}
