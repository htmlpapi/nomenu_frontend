import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTrackerComponent } from './comments-tracker.component';

describe('CommentsTrackerComponent', () => {
  let component: CommentsTrackerComponent;
  let fixture: ComponentFixture<CommentsTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsTrackerComponent]
    });
    fixture = TestBed.createComponent(CommentsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
