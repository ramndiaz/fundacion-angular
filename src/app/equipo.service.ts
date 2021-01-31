import { Injectable } from '@angular/core';
//import { EquipoComponent } from './equipo/equipo.component';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {


  equipo: any[]= [
    {
      nombre:'Maria Aquino',
      cargo:'presidenta',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae iure eligendi sequi illo debitis repellat aperiam animi odit nobis tenetur vel, perferendis necessitatibus expedita inventore a beatae voluptatem nulla'
    },
    {
      nombre:'William Aquino',
      cargo:'vice presidente',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae iure eligendi sequi illo debitis repellat aperiam animi odit nobis tenetur vel, perferendis necessitatibus expedita inventore a beatae voluptatem nulla'
    },
    {
      nombre:'Wilmer Aquino',
      cargo:'contable',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae iure eligendi sequi illo debitis repellat aperiam animi odit nobis tenetur vel, perferendis necessitatibus expedita inventore a beatae voluptatem nulla'
    },
    {
      nombre:'Willy Aquino',
      cargo:'vocal',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae iure eligendi sequi illo debitis repellat aperiam animi odit nobis tenetur vel, perferendis necessitatibus expedita inventore a beatae voluptatem nulla'
    },
    {
      nombre:'Junior Aquino',
      cargo:'vocal',
      descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae iure eligendi sequi illo debitis repellat aperiam animi odit nobis tenetur vel, perferendis necessitatibus expedita inventore a beatae voluptatem nulla'
    }
  ]

  constructor() {
    console.log("funcionando servicio");
  }
  obtenerEquipo(){
    return this.equipo;
  }
 // obtenerUno(i){
 //   return this.equipo [i];
 // }
}
