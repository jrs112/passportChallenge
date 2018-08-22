import { Component, OnInit } from '@angular/core';
import { GeneralService } from "./services/general";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private generalService: GeneralService) { }
  showAddFactoryForm = false;

  ngOnInit() {
    this.generalService.showAddFactoryForm$.subscribe(
      (data: boolean) => {
        if(data === true || data === false) {
          this.showAddFactoryForm = data;
        }
      }, 
      (err) => console.log(err)
    )
  }

}
