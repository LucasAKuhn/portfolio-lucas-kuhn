import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProyectosComponent } from './components/projetos/proyectos.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    InicioComponent,
    SobreComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
