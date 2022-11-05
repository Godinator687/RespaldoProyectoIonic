import { Component, OnInit } from '@angular/core';
import { Eleccion, SeleccionService } from '../seleccion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers:[SeleccionService,Eleccion]
})
export class MenuComponent implements OnInit {
  recuperarOpcion = [];
  recuperarEleccion = [];
  
  constructor(
    private selecOpc:SeleccionService,
    private selecElec:Eleccion,
  ){}
  ngOnInit(){
    this.recuperarOpcion = this.selecOpc.obtenerLista();
    this.recuperarEleccion = this.selecElec.obtenerLista();
  }

}
