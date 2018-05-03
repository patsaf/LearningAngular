import { Component, OnInit } from '@angular/core';
import { AddCarService } from '../add-car.service';
import { isNumeric } from 'rxjs/util/isNumeric';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  inputMake: string;
  inputModel: string;
  inputPrice: number;
  errorMakeClass = 'hide';
  errorModelClass = 'hide';
  errorPriceClass = 'hide';

  constructor(private addCarService: AddCarService) { }

  saveNewCar() {
    this.errorMakeClass = 'hide';
    this.errorModelClass = 'hide';
    this.errorPriceClass = 'hide';
    if (this.inputMake == null) {
      this.errorMakeClass = 'show';
    }
    if (this.inputModel == null) {
      this.errorModelClass = 'show';
    }
    if (this.inputPrice == null) {
      this.errorPriceClass = 'show';
    } else if (!isNumeric(this.inputPrice)) {
      this.errorPriceClass = 'format';
    }
    if (this.errorMakeClass == 'hide' && this.errorModelClass == 'hide' && this.errorPriceClass == 'hide') {
      this.addCarService.saveCar(this.inputMake, this.inputModel, this.inputPrice);
    }
  }
}
