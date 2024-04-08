import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuserComponent } from './updateuser.component';

describe('UpdateuserComponent', () => {
  let component: UpdateuserComponent;
  let fixture: ComponentFixture<UpdateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
