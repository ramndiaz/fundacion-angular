import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']

})
export class InicioComponent implements OnInit {

  constructor( private router:Router) {}

  ngOnInit(): void {
  }

  navegarContacto(){
    this.router.navigate(['/contacto']);
  }
  navegarAula(){
    this.router.navigate(['/aula']);
  }
  navegarNosotros(){
    this.router.navigate(['/nosotros']);
  }
  navegarNoticias(){
    this.router.navigate(['/noticias']);
  }
  navegarEbook(){
    this.router.navigate(['/ebook']);
  }

  

}

