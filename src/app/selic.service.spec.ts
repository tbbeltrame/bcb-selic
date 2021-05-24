import { TestBed } from '@angular/core/testing';

import { SelicService } from './selic.service';

describe('SelicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelicService = TestBed.get(SelicService);
    expect(service).toBeTruthy();
  });
});
