import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface timezone{
     main: {
    temp: number;   
  };
    name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }
  apiKey = '892b2ec632fde3231ef76cd3eedefec3'; 
   baseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pt_br';


getTemperatura(coords: GeolocationCoordinates): Observable <timezone> {
  return this.http.get<timezone>(this.baseUrl, {
     params: {
       lat: coords.latitude, 
       lon: coords.longitude, 
       appid: this.apiKey,
      },
  });
}

}