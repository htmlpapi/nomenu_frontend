import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessAccountComponent } from './access-account.component';

describe('AccessAccountComponent', () => {
  let component: AccessAccountComponent;
  let fixture: ComponentFixture<AccessAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessAccountComponent]
    });
    fixture = TestBed.createComponent(AccessAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
