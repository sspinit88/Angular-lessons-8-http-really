import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

    cars = [];


    constructor(private CarsServices: CarsService) {

    }


    ngOnInit() {

    }

    loadCars() {
        this.CarsServices.getCars().subscribe((response) => {
            this.cars = response;
        });
    }

}
