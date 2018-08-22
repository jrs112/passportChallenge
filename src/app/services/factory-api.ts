import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factory } from "../model/factory";
import { Observable, BehaviorSubject } from 'rxjs';
import { GeneralService } from "./general";

export const ANONYMOUS_FACTORY: Factory = {
  _id: undefined,
  factoryTitle: '',
  minValue: 0,
  maxValue: 0,
  children: []
}

@Injectable()

export class FactoryApiService {

constructor(private http: HttpClient, private generalService: GeneralService) { }

private subject = new BehaviorSubject<Factory>(ANONYMOUS_FACTORY);
factory$: Observable<Factory> = this.subject.asObservable();

updateFactoryObs(info: Factory) {
  this.subject.next(info);
}

//Create Factory
createFactory(factoryInfo) {
 return this.http.post("/tree/createfactory", factoryInfo);
}

//Update Factory
updateFactory(factoryInfo) {
 return this.http.post("/tree/updatefactory", factoryInfo);
}

//Delete Factory
deleteFactory(factoryInfo) {
 return this.http.post("/tree/deleteFactory", factoryInfo);
}

cancelUpdate(info) {
  this.generalService.cancelFactoryUpdate$.next(info);
  this.subject.next(ANONYMOUS_FACTORY);
}





}
