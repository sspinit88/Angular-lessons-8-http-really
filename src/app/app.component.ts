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

}
