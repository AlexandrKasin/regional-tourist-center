import { TestBed } from '@angular/core/testing';

import { LoginBehaviorService } from './login-behavior.service';

describe('LoginBehaviorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginBehaviorService = TestBed.get(LoginBehaviorService);
    expect(service).toBeTruthy();
  });
});
