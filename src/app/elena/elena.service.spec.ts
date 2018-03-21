import { TestBed, inject } from '@angular/core/testing';

import { ElenaService } from './elena.service';

describe('ElenaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElenaService]
    });
  });

  it('should be created', inject([ElenaService], (service: ElenaService) => {
    expect(service).toBeTruthy();
  }));
});
