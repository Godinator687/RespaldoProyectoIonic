import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PieComponent } from '../componentes/pie/pie.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AspirantesComponent } from '../componentes/aspirantes/aspirantes.component';
import { DatosGeneralesComponent } from '../componentes/datos-generales/datos-generales.component';
import { AspirantesConsultasComponent } from '../componentes/consultas-aspirantes/aspirantes-consultas.component';
import { RolesComponent } from '../componentes/roles/roles.component';
import { LicenciaturasComponent } from '../componentes/licenciaturas/licenciaturas.component';
import { ConsultasLicenciaturasComponent } from '../componentes/consultas-licenciaturas/consultas-licenciaturas.component';
import { TipoEvaluacionComponent } from '../componentes/tipo-evaluacion/tipo-evaluacion.component';
import { ConsultasTipoEvaluacionComponent } from '../componentes/consultas-tipo-evaluacion/consultas-tipo-evaluacion.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    PieComponent,
    MenuComponent,
    AspirantesComponent,
    DatosGeneralesComponent,
    AspirantesConsultasComponent,
    LicenciaturasComponent,
    ConsultasLicenciaturasComponent,
    TipoEvaluacionComponent,
    ConsultasTipoEvaluacionComponent,
    RolesComponent]
})
export class HomePageModule {}
