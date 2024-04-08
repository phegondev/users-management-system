import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslistComponent } from './userslist.component';

describe('UserslistComponent', () => {
  let component: UserslistComponent;
  let fixture: ComponentFixture<UserslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserslistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
