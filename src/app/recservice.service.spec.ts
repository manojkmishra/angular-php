import { TestBed, inject } from '@angular/core/testing';

import { RecserviceService } from './recservice.service';

describe('RecserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecserviceService]
    });
  });

  it('should be created', inject([RecserviceService], (service: RecserviceService) => {
    expect(service).toBeTruthy();
  }));
});
