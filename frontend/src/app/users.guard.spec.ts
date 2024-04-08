import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usersGuard } from './users.guard';

describe('usersGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usersGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
