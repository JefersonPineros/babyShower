import { TestBed } from '@angular/core/testing';

import { BabyShowerService } from './baby-shower.service';

describe('BabyShowerService', () => {
  let service: BabyShowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyShowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
