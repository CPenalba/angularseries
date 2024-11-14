import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';
import { DetallesSerieComponent } from './components/detalles-serie/detalles-serie.component';
import { PersonajesSerieComponent } from './components/personajes-serie/personajes-serie.component';
import { ModificarPersonajeComponent } from './components/modificar-personaje/modificar-personaje.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: NuevoPersonajeComponent },
  { path: 'detalles/:id', component: DetallesSerieComponent },
  { path: 'personajesserie/:id', component: PersonajesSerieComponent },
  { path: 'modificarpersonaje', component: ModificarPersonajeComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
