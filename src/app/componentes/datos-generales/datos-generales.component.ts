import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.scss'],
})
export class DatosGeneralesComponent implements OnInit {
  datos_generales;

  constructor(private fb:FormBuilder) { 
    this.datos_generales = fb.group({
      Nombre:['Luis',Validators.required], //se modifica la nueva lista para tener 3 campos seccionados en datos generales
      ApellidoPaterno:['Alfredo', Validators.required], // se agrega el valor ApellidoPaterno
      ApellidoMaterno:['Vergara',Validators.required], // se agrega el valor de ApellidoMaterno
      Matricula:['201711131',Validators.required],
      Password:['blahblah',Validators.required],
      Email:['201711131@tese.edu.mx',Validators.required],
      Telefono:['558272928',Validators.required]
    });
  }

  ngOnInit() {}

}
