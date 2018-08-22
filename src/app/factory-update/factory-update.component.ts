import { Component, OnInit } from '@angular/core';
import { FactoryApiService } from "../services/factory-api";
import { Factory } from "../model/factory";

@Component({
  selector: 'app-factory-update',
  templateUrl: './factory-update.component.html',
  styleUrls: ['./factory-update.component.scss']
})
export class FactoryUpdateComponent implements OnInit {

  constructor(private factoryApiService: FactoryApiService) { }
  factory$: Factory;
  formErrMsg = "";
  minMaxErr = "";
  valueArr = [];
  childAmountMax = 16;
  childMin;
  childMax;
  factoryTitle;
  childAmount;
  factoryId;
  updatingFactory = false;
  missingTitleMsg = "Please Enter The Factory Title";
  missingGenAmtMsg = "Please Select A Generate Amount";
  missingMinAmtMsg = "Please Enter A Min Amount";
  missingMaxAmtMsg = "Please Enter A Max Amount";
  minMaxErrMsg = "The Min amount must be less than or equal to the Max amount.";

  ngOnInit() {
    this.setValueArr(this.childAmountMax);
    this.factoryApiService.factory$.subscribe(
      (data: Factory) => {
        console.log("update comp data", data)
        this.factory$ = data;
        this.childMin = data.minValue;
        this.childMax = data.maxValue;
        this.factoryTitle = data.factoryTitle;
        this.childAmount = data.children.length;
        this.factoryId = data._id;
      },
      (err) => console.log("there was an error getting the update data", err)
    )
  }

  setValueArr(number) {
    for (let i = 0; i < number; i++) {
      this.valueArr.push(i);
    }
  }

  checkMinMax() {
    this.minMaxErr = "";
    if(this.childMin > this.childMax && this.childMax != null) {
      console.log("got here")
      this.minMaxErr = this.minMaxErrMsg;
    }
  }

  cancelUpdate() {
    const updateObj = {
      _id: this.factoryId
    }
    this.factoryApiService.cancelUpdate(updateObj);
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

  updateFactory(form) {
    this.updatingFactory = true;
    this.formErrMsg = "";
    if(this.minMaxErr === this.minMaxErrMsg) {
      this.updatingFactory = false;
      return;
    }
    if(form.factoryTitle === "") {
      this.updatingFactory = false;
      this.formErrMsg = this.missingTitleMsg;
      return;
    }
    if(form.childAmount === "" || form.childAmount === null) {
      this.updatingFactory = false;
      this.formErrMsg = this.missingGenAmtMsg;
      return;
    }
    if(form.childMin === "" || form.childMin === null) {
      this.updatingFactory = false;
      this.formErrMsg = this.missingMinAmtMsg;
      return;
    }
    if(form.childMax === "" || form.childMax === null) {
      this.updatingFactory = false;
      this.formErrMsg = this.missingMaxAmtMsg;
      return;
    }
    const updateObj = {
      _id: this.factoryId,
      factoryTitle: form.factoryTitle,
      childAmount: form.childAmount,
      minValue: form.childMin,
      maxValue: form.childMax,
    }

  let updateFactory = this.factoryApiService.updateFactory(updateObj);
  let updateFactory$ = updateFactory.subscribe(
    (data: any) => {
      console.log("SUCCES", data);
      if(data.errMsg) {
        this.formErrMsg = data.errMsg;
        this.updatingFactory = false;
        return;
      }
      this.updatingFactory = false;
      this.cancelUpdate();

    },
    (err) => {
      console.log("there was an error creating the factory", err)
      this.formErrMsg = "There was an error.  Please Try Again."
      this.updatingFactory = false;
    }
  )

  }

}
