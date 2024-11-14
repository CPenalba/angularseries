import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service.series';
import { Router } from '@angular/router';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-nuevo-personaje',
  templateUrl: './nuevo-personaje.component.html',
  styleUrl: './nuevo-personaje.component.css',
})
export class NuevoPersonajeComponent implements OnInit {
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajaidSerie') cajaIdSerie!: ElementRef;

  public series!: Array<Serie>;
  public personaje!: Personaje;

  constructor(private _service: ServiceSeries, private _router: Router) {}

  nuevoPersonaje(): void {
    let nombre = this.cajaNombre.nativeElement.value;
    let imagen = this.cajaImagen.nativeElement.value;
    let idSerie = parseInt(this.cajaIdSerie.nativeElement.value);

    this.personaje = new Personaje(0, nombre, imagen, idSerie);
    this._service.nuevoPersonaje(this.personaje).subscribe((response) => {
      this._router.navigate(['/personajesserie/' + idSerie]);
    });
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
  }
}
