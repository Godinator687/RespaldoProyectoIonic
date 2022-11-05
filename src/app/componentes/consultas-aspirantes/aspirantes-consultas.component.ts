import { Component, OnInit } from '@angular/core';
import { IngLic, Periodo, Roles } from '../seleccion.service';

@Component({
  selector: 'app-aspirantes-consultas',
  templateUrl: './aspirantes-consultas.component.html',
  styleUrls: ['./aspirantes-consultas.component.scss'],
  providers: [Periodo,IngLic,Roles]
})
export class AspirantesConsultasComponent implements OnInit {
  recuperarPeriodo = [];
  recuperaRoles = [];
  //recuperarFolio =[];
  //recuperarMat = [];
  //recuperarApeP = [];
  //recuperarApeM = [];
  //recuperarNom = [];
  recuperarIng = [];
Rol: any;

  constructor(
    private selecPeri:Periodo,
    private selecRol:Roles,
    //private selecInst:Institucion,
    private selecIng:IngLic,
    //private selecEval:Evaluaciones,
    //private selecPos:Posgrado,
    //private notif:ToastController
    ) {}

    ngOnInit(){
      this.recuperarPeriodo =this.selecPeri.obtenerLista();
      this.recuperaRoles =this.selecRol.obtenerLista();
      //this.recuperarInst =this.selecInst.obtenerLista();
      
      this.recuperarIng =this.selecIng.obtenerLista();
      //this.recuperarEval =this.selecEval.obtenerLista();
      //this.recuperaPos =this.selecPos.obtenerLista();
  }

}
