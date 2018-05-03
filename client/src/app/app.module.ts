import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { FetchCarsService } from './fetch-cars.service';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AddCarService } from './add-car.service';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    routing,
    FormsModule
  ],
  providers: [FetchCarsService, AddCarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
