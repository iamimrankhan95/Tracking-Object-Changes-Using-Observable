import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedUserStatusComponent } from './logged-user-status.component';

describe('LoggedUserStatusComponent', () => {
  let component: LoggedUserStatusComponent;
  let fixture: ComponentFixture<LoggedUserStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedUserStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedUserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
