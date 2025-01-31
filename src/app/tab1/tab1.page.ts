import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  chats: any [] = [
    {
      username:'Yamileth RR' ,
      message:'Epaaa',
      date:'22:09',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Joss' ,
      message:'Oliss',
      date:'12:01',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alex BS' ,
      message:'Madafaker',
      date:'13:50',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alejandro' ,
      message:'Hola!',
      date:'10:03',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Tano' ,
      message:'JAJAJA',
      date:'21:09',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Madai' ,
      message:'Siiii',
      date:'22:15',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Ivan' ,
      message:'Ey!',
      date:'12:12',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Yazmin' ,
      message:'Amistad',
      date:'21:09',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jonathan' ,
      message:'Holaaa',
      date:'12:08',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Gael' ,
      message:'Eo',
      date:'08:06',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    }

  ];  

  constructor() {}

}
