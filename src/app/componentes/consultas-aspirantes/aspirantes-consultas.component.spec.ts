import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AspirantesConsultasComponent } from './aspirantes-consultas.component';

describe('AspirantesConsultasComponent', () => {
  let component: AspirantesConsultasComponent;
  let fixture: ComponentFixture<AspirantesConsultasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirantesConsultasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AspirantesConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
