import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from "socket.io-client";
import { Observable } from "rxjs";


@Injectable()

export class SocketService {

private socket;

constructor(private http: HttpClient) {
  const serverUrl = "passportchallenge.herokuapp.com";
  // const serverUrl = "http://localhost:4200"
  this.socket = io(serverUrl);
}

//for closing a socket

closeSocket() {

    this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  }

  //requesting and then subscribing to current factories

getCurrentFactories() {
  this.socket.emit("getFactories", function(msg) {
    if(msg.errMsg) {
      console.log("THERE WAS AN Error", msg.errMsg);
    }
  })
  return Observable.create((observer) => {
    this.socket.on("currentFactoryInfo", function(info) {
        observer.next(info);
    })
  })
}

}
