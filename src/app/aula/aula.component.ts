import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/inicio']);
  }
  navegarContacto(){
    this.router.navigate(['/contacto']);
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
