import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WsDataComponent } from './ws-data.component';

describe('WsDataComponent', () => {
  let component: WsDataComponent;
  let fixture: ComponentFixture<WsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsDataComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
