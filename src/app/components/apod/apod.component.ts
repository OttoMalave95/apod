import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/shared/models/apod';
import { NasaApiService } from 'src/app/shared/services/nasa-api.service';

@Component({
  selector: 'dev-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.styl']
})
export class ApodComponent implements OnInit {

  apod: Apod;
  error: string;

  constructor(private nasaApi: NasaApiService) { }

  ngOnInit() {
    this.nasaApi.getApod()
      .subscribe(
      (data: Apod) => {
        this.apod = data;
      },
      error => {
        this.error = 'Error al conectarse con el servidor';
      });
  }

}
