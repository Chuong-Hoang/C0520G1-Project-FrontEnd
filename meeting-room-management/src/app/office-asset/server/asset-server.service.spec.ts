import { TestBed } from '@angular/core/testing';

import { AssetServerService } from './asset-server.service';

describe('AssetServerService', () => {
  let service: AssetServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
