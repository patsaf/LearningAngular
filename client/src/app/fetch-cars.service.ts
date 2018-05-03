import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchCarsService {

  constructor(private http: HttpClient) { 
  }

  fetchAllCars(): Observable<Array<Car>> {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200');
    return this.http.get<Array<Car>>(`http://localhost:8080/cars`, { headers: httpHeaders });
  }

  fetchOneCar(id: number): Observable<Car> {
    let httpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'https://localhost:4200');
  return this.http.get<Car>(`http://localhost:8080/cars/` + id, { headers: httpHeaders });
  }

  deleteCar(id: number): Observable<Array<Car>> {
    let httpHeaders = new HttpHeaders()
    .set('Access-Control-Allow-Origin', 'https://localhost:4200');
  return this.http.delete<Array<Car>>(`http://localhost:8080/cars/` + id, { headers: httpHeaders });
  }
}

export interface Car {
  id: number;
  make: string;
  model: string;
  price: number;
}