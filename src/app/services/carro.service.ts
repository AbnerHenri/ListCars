import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICarro } from '../interfaces/ICarro';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarroService {
  constructor(private http: HttpClient) {}

  public getCars(): Observable<ICarro> {
    return this.http.get<ICarro>(`${environment.apiUrl}/carros`);
  }

  public addCar(car: ICarro): Observable<ICarro> {
    return this.http.post<ICarro>(`${environment.apiUrl}/carros`, car);
  }
}
