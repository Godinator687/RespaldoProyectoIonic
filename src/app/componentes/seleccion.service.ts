import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  selecOpc=[
    {
      Id: '1',
      Opcion: 'Aspirantes',
      Elec:[{
        Id_El:'1',
        Nombre:'Nuevo',
      },
      {
      Id_El:'2',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '2',
      Opcion: 'Periodo',
      Elec:[{
        Id_El:'3',
        Nombre:'Nuevo',
      },
      {
      Id_El:'4',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '3',
      Opcion: 'Roles',
      Elec:[{
        Id_El:'5',
        Nombre:'Nuevo',
      },
      {
      Id_El:'6',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '4',
      Opcion: 'Datos Generales',
      Elec:[{
        Id_El:'7',
        Nombre:'Nuevo',
      },
      {
      Id_El:'8',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '5',
      Opcion: 'Instituciones',
      Elec:[{
        Id_El:'9',
        Nombre:'Nuevo',
      },
      {
      Id_El:'10',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '6',
      Opcion: 'Posgrados',
      Elec:[{
        Id_El:'11',
        Nombre:'Nuevo',
      },
      {
      Id_El:'12',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '7',
      Opcion: 'Licenciaturas',
      Elec:[{
        Id_El:'13',
        Nombre:'Nuevo',
      },
      {
      Id_El:'14',
      Nombre:'Consultas',
      }
    ]
    },
    {
      Id: '8',
      Opcion: 'Tipo de Evaluaciones',
      Elec:[{
        Id_El:'15',
        Nombre:'Nuevo',
      },
      {
      Id_El:'16',
      Nombre:'Consultas',
      }
    ]
    }
 ]

  constructor() { }


obtenerLista(){
  return this.selecOpc;
  }
};

export class Eleccion {

  selecOpc=[
    {
      Id: '1',
      Opcion: 'Nuevo',
    },
    {
      Id: '2',
      Opcion: 'Consulta',
    },
 ]

  constructor() { }


obtenerLista(){
  return this.selecOpc;
  }
};



export class Periodo {

  selecOpc=[
    {
      Id: '1',
      Descripcion: '2017-1',
    },
    {
      Id: '2',
      Descripcion: '2017-2',
    },
    {
      Id: '3',
      Descripcion: '2018-1',
    },
    {
      Id: '4',
      Descripcion: '2018-2',
    },
    {
      Id: '5',
      Descripcion: '2019-1',
    },
    {
      Id: '6',
      Descripcion: '2019-2',
    },
    {
      Id: '7',
      Descripcion: '2020-1',
    },
    {
      Id: '8',
      Descripcion: '2020-2',
    },
    {
      Id: '9',
      Descripcion: '2021-1',
    },
    {
      Id: '10',
      Descripcion: '2021-2',
    },
    {
      Id: '11',
      Descripcion: '2022-1',
    },
    {
      Id: '12',
      Descripcion: '2022-2',
    }
 ]

  constructor() { }


obtenerLista(){
  return this.selecOpc;
  }
};

export class Roles {

  selecOpc=[
    {
      Id: '1',
      Nombre: 'Jefe de Divisi??n',
    },
    {
      Id: '2',
      Nombre: 'Aspirante',
    },
    {
      Id: '3',
      Nombre: 'Coordinador de Posgrado',
    },
    {
      Id: '4',
      Nombre: 'Academia de Posgrado',
    },
    {
      Id: '5',
      Nombre: 'Alumno',
    },
    {
      Id: '6',
      Nombre: 'Tutor',
    },
    {
      Id: '7',
      Nombre: 'Tutorado',
    }
  ]
  constructor() { }
  obtenerLista(){
  return this.selecOpc;
  }
};

export class Institucion {
  selecOpc=[
    {
      Id: '1',
      Nombre: 'Tecnol??gico de Estudios Superiores de Ecatepec',
    },
    {
      Id: '2',
      Nombre: 'Tecnologico de Estudios Superiores de Chalco',
    },
    {
      Id: '3',
      Nombre: 'Universidad Polit??cnica de Tec??mac',
    },
    {
      Id: '4',
      Nombre: 'Universidad Politecnica de Texcoco',
    }
  ]
  constructor() { }
  obtenerLista(){
  return this.selecOpc;
  }
};

export class IngLic {

  selecOpc=[
    {
      Id: '1',
      Nombre_Lic: 'Contadur??a',
    },
    {
      Id: '2',
      Nombre_Lic: 'Qu??mica',
    },
    {
      Id: '3',
      Nombre_Lic: 'Bioqu??mica',
    },
    {
      Id: '4',
      Nombre_Lic: 'Electr??nica',
    },
    {
      Id: '5',
      Nombre_Lic: 'Industrial',
    },
    {
      Id: '6',
      Nombre_Lic: 'Mec??nica',
    },
    {
      Id: '7',
      Nombre_Lic: 'Mecatr??nica',
    },
    {
      Id: '8',
      Nombre_Lic: 'Sistemas Computacionales',
    },
    {
      Id: '9',
      Nombre_Lic: 'Inform??tica',
    },
    {
      Id: '10',
      Nombre_Lic: 'Gesti??n Empresarial',
    },
    {
      Id: '11',
      Nombre_Lic: 'Aeron??utica',
    },
    {
      Id: '12',
      Nombre_Lic: 'Electromec??nica',
    },
    {
      Id: '13',
      Nombre_Lic: 'Administraci??n',
    },
    {
      Id: '14',
      Nombre_Lic: 'Energ??as Renovables',
    },
    {
      Id: '15',
      Nombre_Lic: 'Gastronom??a',
    },
    {
      Id: '16',
      Nombre_Lic: 'Animaci??n Digital y Efectos Visuales ',
    },
    {
      Id: '17',
      Nombre_Lic: 'Ambiental',
    },
    {
      Id: '18',
      Nombre_Lic: 'Ingenier??a Civil',
    },
    {
      Id: '19',
      Nombre_Lic: 'Ingenier??a en Materiales',
    },
    {
      Id: '20',
      Nombre_Lic: 'Tecnolog??as de la Informaci??n y Comunicaciones',
    },
    {
      Id: '21',
      Nombre_Lic: 'Log??stica',
    },
    {
      Id: '22',
      Nombre_Lic: 'Biom??dica',
    },
    {
      Id: '23',
      Nombre_Lic: 'Turismo',
    },
    {
      Id: '24',
      Nombre_Lic: 'Sistemas Automotrices',
    },
    {
      Id: '25',
      Nombre_Lic: 'Industrias Alimentarias',
    },
    {
      Id: '26',
      Nombre_Lic: 'Forestal',
    },
    {
      Id: '27',
      Nombre_Lic: 'Innovaci??n Agr??cola Sustentable ',
    },
    {
      Id: '28',
      Nombre_Lic: 'Software',
    },
    {
      Id: '29',
      Nombre_Lic: 'Tecnolog??as de Manufactura ',
    },
    {
      Id: '30',
      Nombre_Lic: 'Financiera',
    },
    {
      Id: '31',
      Nombre_Lic: 'Electr??nica y Telecomunicaciones',
    },
    {
      Id: '32',
      Nombre_Lic: 'Rob??tica',
    },
    {
      Id: '33',
      Nombre_Lic: 'Comercio Internacional y Aduanas',
    },
    {
      Id: '34',
      Nombre_Lic: 'Admon y Gesti??n de peque??as y medianas empresas',
    }
  ]
  constructor() { }
  obtenerLista(){
  return this.selecOpc;
  }
};

export class Evaluaciones {
  selecOpc=[
    {
      Id: '1',
      Nombre: 'Examen Interno',
    },
    {
      Id: '2',
      Nombre: 'Examen Externo',
    },
    {
      Id: '3',
      Nombre: 'Entrevista con Academia de Posgrado',
    },
    {
      Id: '4',
      Nombre: 'Curso Propedeutico',
    }
  ]
  constructor() { }
  obtenerLista(){
  return this.selecOpc;
  }
};

export class Posgrado {
  selecOpc=[
    {
      Id: '1',
      Nombre_P: 'Doctorado en Ciencia de Materiales',
    },
    {
      Id: '2',
      Nombre_P: 'Maestr??a en Ingenier??a en Manufactura con Especialidad en Sistemas de Manufactura',
    },
    {
      Id: '3',
      Nombre_P: 'Maestr??a en Ciencias en Micro y Nanotecnolog??as',
    },
    {
      Id: '4',
      Nombre_P: 'Maestr??a en Formaci??n de Formadores de Docentes de Ciencias Naturales y Ense??anza de las Ciencias',
    },{
      Id: '5',
      Nombre_P: 'Maestr??as en Ciencias en Ingenier??a Bioqu??mica',
    },
    {
      Id: '6',
      Nombre_P: 'Maestr??a en Ingenier??a en Sistemas Computacionales',
    },
    {
      Id: '7',
      Nombre_P: 'Maestr??a en Ciencias en Ingenier??a Mecatr??nica',
    },
    {
      Id: '8',
      Nombre_P: 'Maestr??a en Eficiencia Energ??tica y EneMaestr??a en Eficiencia Energ??tica y Energ??as Renovablesrg??as Renovables',
    }
  ]
  constructor() { }
  obtenerLista(){
  return this.selecOpc;
  }
};