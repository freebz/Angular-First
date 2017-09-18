// 예제 7-24 contacts-manager-v2/src/app/user-list/user-list.service.ts [ch7-4]

import { Injectable } from '@angular/core';
import { User } from './user-detail';
import { MyApiGatewayService } from '../my-api-gateway.service';

@Injectable()
export class UserListService {

    constructor(public apiGateway: MyApiGatewayService) { }

    findAllUserSummary() {
	return this.apiGateway.get('users');
    }
}
