import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicAngularUtilitiesComponent } from './ionic-angular-utilities.component';

describe('IonicAngularUtilitiesComponent', () => {
  let component: IonicAngularUtilitiesComponent;
  let fixture: ComponentFixture<IonicAngularUtilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicAngularUtilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicAngularUtilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
