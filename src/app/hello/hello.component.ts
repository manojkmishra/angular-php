import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  var1 = 'manoj' ;
  i = 0;
  constructor() { }
  doanytask() {
    console.log(`in hello i= ${this.i++}`) ;
  }

  ngOnInit() {
  }

}
