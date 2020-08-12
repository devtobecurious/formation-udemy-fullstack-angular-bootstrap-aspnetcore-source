import { TestBed } from '@angular/core/testing';

import { SelfieService } from './selfie.service';

describe('SelfieService', () => {
  let service: SelfieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
