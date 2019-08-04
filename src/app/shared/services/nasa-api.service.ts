import { Injectable } from '@angular/core';
import { Apod } from '../models/apod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'DEMO_KEY';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  constructor(private httpClient: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }
}
