import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie';
import { ServiceSeries } from '../../services/service.series';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public series!: Array<Serie>;

  constructor(private _service: ServiceSeries) {}

  ngOnInit(): void {
    this._service.getSeries().subscribe((response) => {
      this.series = response;
    });
  }
}
