import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent implements OnInit {

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
  navegarNoticias(){
    this.router.navigate(['/noticias']);
  }

}
