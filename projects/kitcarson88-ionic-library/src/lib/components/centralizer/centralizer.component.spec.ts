import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CentralizerComponent } from './centralizer.component';

describe('CentralizerComponent', () => {
  let component: CentralizerComponent;
  let fixture: ComponentFixture<CentralizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CentralizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
