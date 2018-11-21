import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';

@Injectable()
export class CarsService {

    constructor(private http: HttpClient) {
    }

    // обработка ошибок


    // метод get
    getCars() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json; charset=ut8'
        });

        return this.http.get('http://localhost:3700/cars', {
            headers: headers
        })
            .pipe(map(response => {
                    return response;
                }),
                // обработка ошибок
                catchError((err) => {
                    return throwError('Сервер недоступен. Попробуйте позже.');
                })
            );


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
