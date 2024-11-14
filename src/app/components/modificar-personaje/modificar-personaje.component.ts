import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('cajaidSerie') cajaIdSerie!: ElementRef;
  @ViewChild('cajaidPersonaje') cajaIdPersonaje!: ElementRef;
  public series!: Array<Serie>;
  public personajes!: Array<Personaje>;
  public serie!: Serie;
  public personaje!: Personaje;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  mostrarSerie(): void {
    var idSerie = parseInt(this.cajaIdSerie.nativeElement.value);
    this._service.findSerieById(idSerie).subscribe((response) => {
      this.serie = response;
    });
  }

  mostrarPersonaje(): void {
    var idPersonaje = parseInt(this.cajaIdPersonaje.nativeElement.value);
    this._service.findPersonajeById(idPersonaje).subscribe((response) => {
      this.personaje = response;
    });
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
    this._service.getPersonajes().subscribe((response) => {
      this.personajes = response;
    });
  }
}
