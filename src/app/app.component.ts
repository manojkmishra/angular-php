import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() {
  this.title = '' ;
  setInterval(() => this.title = Math.random().toString(), 500) ;
}
clickFunction() {
  console.log('button clicked');
}
// tslint:disable-next-line:member-ordering
title1 = 'app1'; title2 = 'app2';
updateTitle1(e) {
  console.log('updateTitile1---even-e=', e.target.value);
  this.title1 = e.target.value;
}


}
