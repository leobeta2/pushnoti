import { Injectable } from '@angular/core';
import { OneSignal } from "@ionic-native/onesignal";

import { Platform } from "ionic-angular";

@Injectable()
export class PushnotificationProvider {

  constructor( private oneSignal: OneSignal,
                public platform: Platform ) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications(){

    if(this.platform.is('cordova')){
      //id de One signal, y despues ID de fire
    this.oneSignal.startInit('c79fc1ac-d3ec-4f9b-84f0-845ee4aec467', '698756283206');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
    // do something when notification is received
    console.log('notificacion recibida');
    
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      console.log('notificacion abierta');
      
    });

    this.oneSignal.endInit();
    }else{
      console.log('No estamos en el dispositivo!!');
      
    }

    
      }

}
