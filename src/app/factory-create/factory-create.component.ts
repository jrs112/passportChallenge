import { Component, OnInit } from '@angular/core';
import { FactoryApiService } from "../services/factory-api";
import { GeneralService } from "../services/general";

@Component({
  selector: 'app-factory-create',
  templateUrl: './factory-create.component.html',
  styleUrls: ['./factory-create.component.scss']
})
export class FactoryCreateComponent implements OnInit {
  valueArr = [];
  childMin = 0;
  childMax = 100;
  minMaxErr = "";
  childAmountMax = 16
  formErrMsg = "";
  creatingFactory = false;
  missingTitleMsg = "Please Enter The Factory Title";
  missingGenAmtMsg = "Please Select A Generate Amount";
  missingMinAmtMsg = "Please Enter A Min Amount";
  missingMaxAmtMsg = "Please Enter A Max Amount";
  minMaxErrMsg = "The Min amount must be less than or equal to the Max amount.";


  constructor(private factoryApiService: FactoryApiService, private generalService: GeneralService) { }

  ngOnInit() {
    this.setValueArr(this.childAmountMax);
  }

  setValueArr(number) {
    for (let i = 0; i < number; i++) {
      this.valueArr.push(i);
    }
  }

  createFactory(form) {
    this.creatingFactory = true;
    this.formErrMsg = "";
    if(this.minMaxErr === this.minMaxErrMsg) {
      return;
    }
    if(form.factoryTitle === "") {
      this.formErrMsg = this.missingTitleMsg;
      return;
    }
    if(form.childAmount === "" || form.childAmount === null) {
      this.formErrMsg = this.missingGenAmtMsg;
      return;
    }
    if(form.childMin === "" || form.childMin === null) {
      this.formErrMsg = this.missingMinAmtMsg;
      return;
    }
    if(form.childMax === "" || form.childMax === null) {
      this.formErrMsg = this.missingMaxAmtMsg;
      return;
    }

  let createFactory = this.factoryApiService.createFactory(form);
  let createFactory$ = createFactory.subscribe(
    (data: any) => {
      console.log("SUCCES", data);
      if(data.errMsg) {
        this.formErrMsg = data.errMsg;
      }
      this.generalService.showAddFactoryForm$.next(false);
      this.creatingFactory = false;

    },
    (err) => {
      console.log("there was an error creating the factory", err)
      this.formErrMsg = "There was an error.  Please Try Again."
      this.creatingFactory = false;
    }
  )

  }

  checkMinMax() {
    this.minMaxErr = "";
    if(this.childMin > this.childMax && this.childMax != null) {
      this.minMaxErr = this.minMaxErrMsg;
    }
  }

  checkFormErr(id) {
    if(this.formErrMsg === this.missingTitleMsg && id === "factoryTitle") {
      this.formErrMsg = "";
      return;
    }
    if(this.formErrMsg === this.missingGenAmtMsg && id === "childAmount") {
      this.formErrMsg = "";
      return;
    }
    if(this.formErrMsg === this.missingMinAmtMsg && id === "childMin") {
      this.formErrMsg = "";
      return;
    }
    if(this.formErrMsg === this.missingMaxAmtMsg && id === "childMax") {
      this.formErrMsg = "";
      return;
    }
  }


}
