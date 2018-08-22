import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FactoryApiService } from "./services/factory-api";
import { SocketService } from "./services/socket";
import { GeneralService } from "./services/general";
import { AppComponent } from './app.component';
import { FactoryComponent } from './factory/factory.component';
import { FactoryCreateComponent } from './factory-create/factory-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    FactoryCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ FactoryApiService, GeneralService, SocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
