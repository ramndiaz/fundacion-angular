import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/inicio']);
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
