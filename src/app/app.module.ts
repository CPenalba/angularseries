import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesSerieComponent } from './components/detalles-serie/detalles-serie.component';
import { appRoutingProvider, routing } from './app.routing';
import { provideHttpClient } from '@angular/common/http';
import { ServiceSeries } from './services/service.series';
import { PersonajesSerieComponent } from './components/personajes-serie/personajes-serie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoPersonajeComponent,
    MenuComponent,
    DetallesSerieComponent,
    PersonajesSerieComponent,
  ],
  imports: [BrowserModule, routing, FormsModule],
  providers: [appRoutingProvider, provideHttpClient(), ServiceSeries],
  bootstrap: [AppComponent],
})
export class AppModule {}
