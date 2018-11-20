import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(private http: HttpClient) {
    }

    // разберем добавление headers на примере get-запросов
    // headers содержит массу полезных данных

    // метод get
    getCars() {
        const headers = new HttpHeaders();

        return this.http.get('http://localhost:3000/cars')
            .pipe(map(response => {
                return response;
            }));
    }

    // post
    addCar(newCarName: string, newCarColor: string) {
        const data = {
            name: newCarName,
            color: newCarColor,
        };
        return this.http.post('http://localhost:3000/cars', data)
            .pipe(map(response => {
                return response;
            }));
    }

    // post
    changeColor(car: any, color: string) {
        car.color = color;
        return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
            .pipe(map(response => {
                return response;
            }));
    }

    // delete
    deleteCar(car: any) {
        return this.http.delete(`http://localhost:3000/cars/${car.id}`)
            .pipe(map(response => {
                return response;
            }));
    }

}
