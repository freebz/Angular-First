import { TestBed, inject } from '@angular/core/testing';

import { MyApiGatewayService } from './my-api-gateway.service';

describe('MyApiGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyApiGatewayService]
    });
  });

  it('should be created', inject([MyApiGatewayService], (service: MyApiGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
