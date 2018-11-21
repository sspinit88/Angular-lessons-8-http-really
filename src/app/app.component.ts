import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    cars = [];
    newCarName = '';
    newCarColor = '';
    colors = [
        'red',
        'green',
        'grey',
        'black',
        'yellow',
        'blue',
        'pink'
    ];

    constructor(private CarsServices: CarsService) {

    }


    ngOnInit() {
        this.loadCars();
    }

    // метод get
    loadCars() {
        this.CarsServices
            .getCars()
            .subscribe((response) => {
                this.cars = response;
            });
    }

    // post
    addNewCar() {
        this.CarsServices
            .addCar(this.newCarName, this.newCarColor)
            .subscribe((json) => {
                console.log(json);
            });
        this.newCarName = '';
        this.newCarColor = '';
    }

    // post

    getRandomColor() {
        const num = Math.round(Math.random() * (this.colors.length - 1));
        return this.colors[num];
    }

    setRandomColor(car: any[]) {
        console.log(car);
        this.CarsServices
            .changeColor(car, this.getRandomColor())
            .subscribe((data) => {
                console.log(data);
            });
    }

    // delete

    deleteCar(car) {
        console.log(car);
        this.CarsServices
            .deleteCar(car)
            .subscribe((data) => {
                // реализуем удаление объектов при нажатии на кнопку
                // на каждой итерации будет создаваться объект 'с'
                // если ее id не равно текущей авто, то обновить
                console.log(data);
                this.cars = this.cars.filter(c => c.id !== car.id);
            });
    }

}
