import { Component, OnInit } from '@angular/core';
import { Evaluaciones } from '../seleccion.service';

@Component({
  selector: 'app-consultas-tipo-evaluacion',
  templateUrl: './consultas-tipo-evaluacion.component.html',
  styleUrls: ['./consultas-tipo-evaluacion.component.scss'],
  providers:[Evaluaciones]
})
export class ConsultasTipoEvaluacionComponent implements OnInit {
  recuperarEval = [];
  constructor(private selecEva:Evaluaciones) { }

  ngOnInit() {
    this.recuperarEval =this.selecEva.obtenerLista();
  }

}
