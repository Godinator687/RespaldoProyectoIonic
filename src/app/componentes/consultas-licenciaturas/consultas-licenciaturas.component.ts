import { Component, OnInit } from '@angular/core';
import { IngLic } from '../seleccion.service';

@Component({
  selector: 'app-consultas-licenciaturas',
  templateUrl: './consultas-licenciaturas.component.html',
  styleUrls: ['./consultas-licenciaturas.component.scss'],
  providers:[IngLic]
})
export class ConsultasLicenciaturasComponent implements OnInit {
  recuperarIngLic = [];
  constructor(private selecIng:IngLic) { }

  ngOnInit() {
    this.recuperarIngLic =this.selecIng.obtenerLista();
  }

}
