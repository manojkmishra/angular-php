import { Component } from '@angular/core';
import { RecserviceService } from './recservice.service';

interface myData { obj: Object ; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
//  data1 = {};
data1 = [];
constructor(private myservice: RecserviceService ) {
       this.title = '' ;  setInterval(() => this.title = Math.random().toString(), 500) ;
      }
// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {  // this.data1 =
                 this.myservice.getData()
                  .subscribe(data => { console.log('/app.component.ts--data.obj=', data.obj) ; this.data1 = data.obj ; }  );
              console.log('this.data1=', this.data1);
           }
// tslint:disable-next-line:member-ordering
title = 'app'; title1 = 'app1'; title2 = 'app2';
// data1 = [{name: 'name1', online: true}, {name: 'name2', online: true}, {name: 'name3', online: true} ] ;
// constructor() {  this.title = '' ;  setInterval(() => this.title = Math.random().toString(), 500) ; }
clickFunction() {  console.log('button clicked'); }
updateTitle1(e) {  console.log('updateTitile1---even-e=', e.target.value);  this.title1 = e.target.value; }
}
