import { Component, OnInit } from '@angular/core';
import { Roles } from '../seleccion.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers:[Roles]
})
export class RolesComponent implements OnInit {

  recuperarRol = [];


  constructor(
    private selecRol:Roles,
    private notif:ToastController
  ) 
  
  { }

  async presentToast(position: 'top'){
    const toast = await this.notif.create({
      message:'El registro ha sido creado',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
  ngOnInit() {
    this.recuperarRol =this.selecRol.obtenerLista();
  }

}
