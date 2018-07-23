import { Component } from '@angular/core';
// import {HelloComponent} from './hello/hello.component';

// ----decorator-----------------------------------------
/*
function dlog(target, name, descriptor) {
console.log('/src/app/app.component.ts--target, name, descriptor=', target, name, descriptor );
// store the original function in a variable
 const original = descriptor.value;
// do some manipulations with descriptor value ----it will orver ride the anymethod written below- when dlog is called in @component
 descriptor.value = function() { console.log('descriptor value changed' ); } ;
 original();
// return the descriptor
 return descriptor;
}
*/

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
title1 = 'app1';
updateTitle1(e) {
  console.log('updateTitile1---even-e=', e.target.value);
  this.title1 = e.target.value;
}
/*
  constructor() {  this.anymethod();  }
  @dlog
  anymethod() { console.log('/src/app/app.component.ts--hello in dlog');  }
  */
}
