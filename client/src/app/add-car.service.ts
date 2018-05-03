import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AddCarService {

  constructor(private http: HttpClient, private router: Router) { }

  saveCar(inMake: string, inModel: string, inPrice: number) {
    const newCar: AddCarRequest = ({
      make: inMake,
      model: inModel,
      price: inPrice,
    });
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200');
    this.http.post(`http://localhost:8080/cars`, newCar, { headers: httpHeaders })
      .subscribe(response => { });
    this.router.navigate(['/cars']);
  }

}

export interface AddCarRequest {
  make: string;
  model: string;
  price: number;
}
