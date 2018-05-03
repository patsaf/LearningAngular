import {Routes, RouterModule} from "@angular/router";
import {CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarComponent } from "./car/car.component";


const appRoutes: Routes = [
    {path: 'cars', component: CarsComponent},
    {path: 'cars/add', component: AddCarComponent},
    {path: 'cars/:id', component: CarComponent}
  ];
  
  export const routing = RouterModule.forRoot(appRoutes)