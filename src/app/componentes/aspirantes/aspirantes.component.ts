import { Component, OnInit } from '@angular/core';
import { Evaluaciones, IngLic, Institucion, Periodo, Posgrado, Roles } from '../seleccion.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aspirantes',
  templateUrl: './aspirantes.component.html',
  styleUrls: ['./aspirantes.component.scss'],
  providers:[Periodo,Roles,Institucion,IngLic,Evaluaciones,Posgrado]
})
export class AspirantesComponent implements OnInit {
  
  recuperarPeriodo = [];
  recuperarRol = [];
  recuperarInst = [];
  recuperarIngLic = [];
  recuperarEval = [];
  recuperaPos = [];

  constructor(
    private selecPeri:Periodo,
    private selecRol:Roles,
    private selecInst:Institucion,
    private selecIng:IngLic,
    private selecEval:Evaluaciones,
    private selecPos:Posgrado,
    private notif:ToastController
    ) {}

  async presentToast(position: 'top'){
    const toast = await this.notif.create({
      message:'El registro ha sido creado',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

    ngOnInit(){
      this.recuperarPeriodo =this.selecPeri.obtenerLista();
      this.recuperarRol =this.selecRol.obtenerLista();
      this.recuperarInst =this.selecInst.obtenerLista();
      this.recuperarIngLic =this.selecIng.obtenerLista();
      this.recuperarEval =this.selecEval.obtenerLista();
      this.recuperaPos =this.selecPos.obtenerLista();
  }

}
