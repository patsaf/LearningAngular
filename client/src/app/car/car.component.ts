import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchCarsService, Car } from '../fetch-cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

  car: Car;
  url: string;
  sliced;

  constructor(private fetchCarsService: FetchCarsService, private router: Router) {
    this.url = this.router.url;
    this.sliced = this.url.slice(6);
    this.fetchCarsService.fetchOneCar(this.sliced).subscribe(response => this.car = response);
  }

  goBack() {
    this.router.navigate(['/cars']);
  }

  delete() {
    this.fetchCarsService.deleteCar(this.sliced).subscribe(response => { });
    setTimeout(() => {
      this.router.navigate(['/cars']);
    },
      3000);
  }

}
