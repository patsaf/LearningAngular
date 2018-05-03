import { Component, OnInit } from '@angular/core';
import { Car, FetchCarsService } from '../fetch-cars.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent{

  cars = new Array<Car>();

  constructor(private fechCarsService: FetchCarsService, private router: Router) {
    this.fetchCars();
 }

 fetchCars() {
   this.fechCarsService.fetchAllCars().subscribe(response => this.cars = response);
 }

 addNewCar() {
  this.router.navigate(['/cars/add']);
}

seeCar(id: number) {
  this.router.navigate(['/cars', id]);
}

}
