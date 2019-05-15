import { TestBed } from '@angular/core/testing';

import { MobileMenuBehaviorService } from './mobile-menu-behavior.service';

describe('MobileMenuBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileMenuBehaviorService = TestBed.get(MobileMenuBehaviorService);
    expect(service).toBeTruthy();
  });
});
