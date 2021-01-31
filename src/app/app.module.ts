import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AulaComponent } from './aula/aula.component';
import { InicioComponent } from './inicio/inicio.component';
import { EbookComponent } from './ebook/ebook.component';
import { NoticiasComponent } from './noticias/noticias.component';


//services
import { EquipoService } from './equipo.service';
import { EquipoComponent } from './equipo/equipo.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FooterComponent,
    ContactoComponent,
    NosotrosComponent,
    AulaComponent,
    InicioComponent,
    EbookComponent,
    NoticiasComponent,
    EquipoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
