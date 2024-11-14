import { Component, OnInit } from '@angular/core';
import { ServiceSeries } from '../../services/service.series';
import { Serie } from '../../models/serie';
import { Router } from '@angular/router';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-modificar-personaje',
  templateUrl: './modificar-personaje.component.html',
  styleUrl: './modificar-personaje.component.css',
})
export class ModificarPersonajeComponent implements OnInit {
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
    this._service.getPersonajes().subscribe((response) => {
      this.personajes = response;
    });
  }
}
