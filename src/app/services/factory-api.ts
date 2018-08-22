import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class FactoryApiService {

constructor(private http: HttpClient) { }
//Create Factory
  createFactory(factoryInfo) {
   return this.http.post("/tree/createFactory", factoryInfo);
  }

}
