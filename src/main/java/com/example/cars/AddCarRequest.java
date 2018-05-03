package com.example.cars;

import javax.validation.constraints.NotNull;

public class AddCarRequest {

    @NotNull
    private String make;

    @NotNull
    private String model;

    @NotNull
    private double price;

    public AddCarRequest() {
    }

    public AddCarRequest(@NotNull String make, @NotNull String model, @NotNull double price) {
        this.make = make;
        this.model = model;
        this.price = price;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public double getPrice() {
        return price;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Car extractCar() {
        return new Car(make, model, price);
    }
}
