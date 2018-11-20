import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class CarsService {

    constructor(private http: HttpClient) {
    }

    getCars() {
        return this.http.get('http://localhost:3000/cars')
            .pipe(map(response => {
                return response;
            }));
    }
}
