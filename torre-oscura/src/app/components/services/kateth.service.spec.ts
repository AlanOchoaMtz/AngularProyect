import { TestBed } from '@angular/core/testing';

import { KatethService } from './kateth.service';

describe('KatethService', () => {
  let service: KatethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KatethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
