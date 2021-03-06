import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerInfoComponent } from './manager-info.component';

describe('ManagerInfoComponent', () => {
  let component: ManagerInfoComponent;
  let fixture: ComponentFixture<ManagerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
