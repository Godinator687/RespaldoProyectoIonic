import { Component, OnInit } from '@angular/core';
import { IngLic } from '../seleccion.service';

@Component({
  selector: 'app-licenciaturas',
  templateUrl: './licenciaturas.component.html',
  styleUrls: ['./licenciaturas.component.scss'],
  providers:[IngLic]
})
export class LicenciaturasComponent implements OnInit {
  recuperarIngLic = [];
  constructor(private selecIng:IngLic) { }

  ngOnInit() {
    this.recuperarIngLic =this.selecIng.obtenerLista();
  }

}
