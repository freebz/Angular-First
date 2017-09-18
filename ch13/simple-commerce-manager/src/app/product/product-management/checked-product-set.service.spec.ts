import { TestBed, inject } from '@angular/core/testing';

import { CheckedProductSetService } from './checked-product-set.service';

describe('CheckedProductSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckedProductSetService]
    });
  });

  it('should be created', inject([CheckedProductSetService], (service: CheckedProductSetService) => {
    expect(service).toBeTruthy();
  }));
});
