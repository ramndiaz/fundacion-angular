import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EquipoService } from './../equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  equipo: any[]= [];

  constructor(
    private router:Router,
    private _servicio: EquipoService
    ) {
      this.equipo = _servicio.obtenerEquipo();
    }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/inicio']);
  }
  navegarContacto(){
    this.router.navigate(['/contacto']);
  }
  navegarAula(){
    this.router.navigate(['/aula']);
  }
  navegarNoticias(){
    this.router.navigate(['/noticias']);
  }
  navegarEbook(){
    this.router.navigate(['/ebook']);
  }

}
