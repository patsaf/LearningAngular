package com.example.cars;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class CarController {

    @Autowired
    CarRepository carRepository;

    @PostConstruct
    public void init() {
        carRepository.save(new Car("BMW", "xD", 13.5));
        carRepository.save(new Car("Audi", "A6", 33.00));
        carRepository.save(new Car("Fiat", "Punto", 1.5));
    }

    @GetMapping("/cars")
    public List<Car> allCars() {
        return carRepository.findAll();
    }

    @GetMapping("/cars/{id}")
    public Car carById(@PathVariable("id") long id) {
        return carRepository.findById(id);
    }

    @PostMapping("/cars")
    public List<Car> addCar(@RequestBody @Valid AddCarRequest carRequest) {
        carRepository.save(carRequest.extractCar());
        return carRepository.findAll();
    }

    @DeleteMapping("/cars/{id}")
    public List<Car> deleteCar(@PathVariable("id") long id) {
        carRepository.delete(carRepository.findById(id));
        return carRepository.findAll();
    }
}
