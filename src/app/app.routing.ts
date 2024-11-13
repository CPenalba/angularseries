import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NuevoPersonajeComponent } from './components/nuevo-personaje/nuevo-personaje.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crear', component: NuevoPersonajeComponent },
];

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
