import { TestBed } from '@angular/core/testing';

import { IonicAngularUtilitiesService } from './ionic-angular-utilities.service';

describe('IonicAngularUtilitiesService', () => {
  let service: IonicAngularUtilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicAngularUtilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
