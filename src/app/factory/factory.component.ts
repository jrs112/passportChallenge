import { Component, OnInit } from '@angular/core';
import { SocketService } from "../services/socket";
import { FactoryApiService } from "../services/factory-api";
import { GeneralService } from "../services/general";
import { Factory } from "../model/factory";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  factoryArr = [];
  currentUpdate = false;
  updateInfo;

  constructor(private socketService: SocketService, private factoryApiService: FactoryApiService, private generalService: GeneralService) { }


  ngOnInit() {
    this.socketService.getCurrentFactories().subscribe(
      (data: Array<any>) => {
        for(let i = 0; i < this.factoryArr.length; i++) {
          console.log("data", data);
          for(let j = 0; j < data.length; j++) {
            const oldFactoryArr = this.factoryArr[i];
            if(oldFactoryArr.showUpdateForm && oldFactoryArr.factoryTitle === data[j].factoryTitle && oldFactoryArr.childAmount === data[j].childAmount && oldFactoryArr.minValue === data[j].minValue && oldFactoryArr.maxValue === data[j].maxValue) {
              data[j].showUpdateForm = true;
              this.factoryArr = data;
              return;
            }
          }
        }
        this.factoryArr = data;
        console.log(data);
      },
      (err) => console.log("there was an error getting the factories", err)
    )

    this.generalService.cancelFactoryUpdate$.subscribe(
      (info) => {
        this.removeUpdateFormFunc(info);
      },
      (err) => console.log("there was an error canciling the factory", err)
    )
  }

  showUpdateFormFunc(info) {
    for(let i = 0; i < this.factoryArr.length; i++) {
      this.factoryArr[i].showUpdateForm = false;
    }
    this.currentUpdate = true;
    this.factoryApiService.updateFactoryObs(info);
    info.showUpdateForm = true;
  }

  removeUpdateFormFunc(info) {
    for(let i = 0; i < this.factoryArr.length; i++) {
      if(info._id === this.factoryArr[i]._id) {
        this.factoryArr[i].showUpdateForm = false;
      }
    }
  }

}
