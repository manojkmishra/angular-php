import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import {FormsModule} from '@angular/forms';
import { RecserviceService } from './recservice.service' ;
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent, HelloComponent ],
  imports: [ BrowserModule,  FormsModule , HttpClientModule],
  providers: [RecserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
