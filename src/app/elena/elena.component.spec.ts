import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElenaComponent } from './elena.component';

describe('ElenaComponent', () => {
  let component: ElenaComponent;
  let fixture: ComponentFixture<ElenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
