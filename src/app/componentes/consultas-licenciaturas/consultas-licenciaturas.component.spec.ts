import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultasLicenciaturasComponent } from './consultas-licenciaturas.component';

describe('ConsultasLicenciaturasComponent', () => {
  let component: ConsultasLicenciaturasComponent;
  let fixture: ComponentFixture<ConsultasLicenciaturasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasLicenciaturasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultasLicenciaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
