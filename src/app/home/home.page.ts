import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../componentes/seleccion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recuperarOpcion = [];
  
  constructor(private selecOpc:SeleccionService
  ){}
  ngOnInit(){
    this.recuperarOpcion =this.selecOpc.obtenerLista();
  }
}
