import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";

@Injectable()

export class GeneralService {

constructor(private http: HttpClient) { }
//Create Factory
  createFactory(goalInfo) {
   return this.http.post("/tree/createFactory", goalInfo);
  }

  showAddFactoryForm$ = new Subject();

  cancelFactoryUpdate$ = new Subject();


}
