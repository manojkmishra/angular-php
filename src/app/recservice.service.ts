import { Injectable } from '@angular/core';

@Injectable(// { providedIn: 'root'}
)
export class RecserviceService {

  constructor() { }

  getData() { return [{name: 'name1', online: true}, {name: 'name2', online: true}, {name: 'name3', online: true} ] ;

  }
}
