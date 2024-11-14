import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-personajes-serie',
  templateUrl: './personajes-serie.component.html',
  styleUrl: './personajes-serie.component.css',
})
export class PersonajesSerieComponent implements OnInit {
  public personajes!: Array<Personaje>;
  public status: boolean = false;
  public idSerie!: string;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceSeries
  ) {}

  deletePersonaje(idPersonaje: number): void {
    var id = idPersonaje.toString();
    console.log(id);
    this._service.deletePersonaje(id).subscribe((response) => {
      this.cargarPersonajes();
    });
  }

  cargarPersonajes(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.idSerie = params['id'];
      this._service
        .findPersonajesByIdSerie(this.idSerie)
        .subscribe((response) => {
          this.status = true;
          this.personajes = response;
        });
    });
  }

  ngOnInit(): void {
    this.cargarPersonajes();
  }
}
