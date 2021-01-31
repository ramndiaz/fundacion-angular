import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AulaComponent } from './aula/aula.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EbookComponent } from './ebook/ebook.component';
import { EquipoComponent } from './equipo/equipo.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'equipo/:id', component: EquipoComponent},
  {path: 'aula', component: AulaComponent},
  {path: 'ebook', component: EbookComponent},
  {path: '**', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
