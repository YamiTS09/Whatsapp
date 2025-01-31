import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  llamadas: any[] = [
    {
      username:'Yamileth RR' ,
      message:'Today, 22:09',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Ivan' ,
      message:'Today, 21:10',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Yazmin' ,
      message:'Today, 19:09',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Jonathan' ,
      message:'Today, 12:12',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Joss' ,
      message:'Yesterday, 13:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alejandro' ,
      message:'Today, 12:30',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Tano' ,
      message:'Today, 12:12',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Madai' ,
      message:'Yesterday, 09:00',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Gael' ,
      message:'25 January, 23:03',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    },
    {
      username:'Alex BS' ,
      message:'25 January, 23:03',
      avatarUrl:'https://ionicframework.com/docs/img/demos/avatar.svg'
    }
  ]

  constructor() {}

}
