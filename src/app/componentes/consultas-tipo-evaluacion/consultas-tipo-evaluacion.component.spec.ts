import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultasTipoEvaluacionComponent } from './consultas-tipo-evaluacion.component';

describe('ConsultasTipoEvaluacionComponent', () => {
  let component: ConsultasTipoEvaluacionComponent;
  let fixture: ComponentFixture<ConsultasTipoEvaluacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasTipoEvaluacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultasTipoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
