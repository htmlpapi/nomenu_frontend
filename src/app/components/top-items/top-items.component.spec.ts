import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopItemsComponent } from './top-items.component';

describe('TopItemsComponent', () => {
  let component: TopItemsComponent;
  let fixture: ComponentFixture<TopItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopItemsComponent]
    });
    fixture = TestBed.createComponent(TopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
