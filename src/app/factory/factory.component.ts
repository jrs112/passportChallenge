import { Component, OnInit } from '@angular/core';
import { SocketService } from "../services/socket";

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent implements OnInit {

  factoryArr = [];

  constructor(private socketService: SocketService) { }


  ngOnInit() {
    this.socketService.getCurrentFactories().subscribe(
      (data: Array<number>) => {
        this.factoryArr = data;
        console.log(data);
      },
      (err) => console.log("there was an error getting the factories", err)
    )
  }

}
