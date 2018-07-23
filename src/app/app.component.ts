import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app'; title1 = 'app1'; title2 = 'app2';
data1 = [{name: 'name1', online: true}, {name: 'name2', online: true}, {name: 'name3', online: true} ] ;
constructor() {  this.title = '' ;  setInterval(() => this.title = Math.random().toString(), 500) ; }
clickFunction() {  console.log('button clicked'); }
updateTitle1(e) {  console.log('updateTitile1---even-e=', e.target.value);  this.title1 = e.target.value; }
}
