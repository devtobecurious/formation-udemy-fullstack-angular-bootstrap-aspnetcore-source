import { TestBed } from '@angular/core/testing';

import { SelfieService } from './selfie.service';

describe('SelfieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfieService = TestBed.get(SelfieService);
    expect(service).toBeTruthy();
  });
});
