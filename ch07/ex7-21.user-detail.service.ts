// 예제 7-21 user-detail.service.ts 개선 버전 1

import { Injectable } from '@angular/core';
import { User } from './user.model';
import { MyApiGatewayService } from '../../my-api-gateway.service';

@Injectable()
export class UserDetailService {
    constructor(public apiGateway: MyApiGatewayService) { }

    findUser(no: number) {
	return this.apiGateway.get(`/api/v1/users/${no}`).map(res => res.json());
    }

    addUser(user: any) {
	return this.apiGateway.post('/api/v1/users', user).map(res => res.json());
    }

    modifyUser(user: User) {
	return this.apiGateway.put(`/api/v1/users/${user.no}`, user).map(res => res.json());
    }

    removeUser(userNo: any) {
	return this.apiGateway.delete(`/api/v1/users/${userNo}`);
    }
}
