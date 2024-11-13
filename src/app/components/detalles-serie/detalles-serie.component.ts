import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-detalles-serie',
  templateUrl: './detalles-serie.component.html',
  styleUrl: './detalles-serie.component.css',
})
export class DetallesSerieComponent implements OnInit {
  public serie!: Serie;
  public status: boolean = false;

  constructor(
    private _activeRoute: ActivatedRoute,
    private _service: ServiceSeries
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this._service.findSerieById(id).subscribe((response) => {
        this.status = true;
        this.serie = response;
      });
    });
  }
}
