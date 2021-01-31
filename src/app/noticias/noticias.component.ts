import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor(private router:Router) { }

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
  navegarNosotros(){
    this.router.navigate(['/nosotros']);
  }
  navegarEbook(){
    this.router.navigate(['/ebook']);
  }

}
