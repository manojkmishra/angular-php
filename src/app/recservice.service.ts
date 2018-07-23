import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable(// { providedIn: 'root'}
)
export class RecserviceService {
  constructor(private http: HttpClient) { }
  getData() {
    // return [{name: 'name1', online: true}, {name: 'name2', online: true}, {name: 'name3', online: true} ] ;  
    return this.http.get('http://localhost:1234/file.php') // subscribe is from Rxjs
    //.subscribe(data => { console.log('/recservice.service.ts--data=', data.obj) ; }  );
  }
}
