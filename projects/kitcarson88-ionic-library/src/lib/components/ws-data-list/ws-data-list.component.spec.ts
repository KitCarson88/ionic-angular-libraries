import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WsDataListComponent } from './ws-data-list.component';

describe('WsDataComponent', () => {
  let component: WsDataListComponent;
  let fixture: ComponentFixture<WsDataListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsDataListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WsDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
