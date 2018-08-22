import { Component, OnInit } from '@angular/core';
import { SocketService } from "../services/socket";
import { FactoryApiService } from "../services/factory-api";
import { GeneralService } from "../services/general";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  factoryArr = [];
  currentUpdate = false;

  constructor(private socketService: SocketService, private factoryApiService: FactoryApiService, private generalService: GeneralService) { }


  ngOnInit() {
    this.socketService.getCurrentFactories().subscribe(
      (data: Array<number>) => {
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
