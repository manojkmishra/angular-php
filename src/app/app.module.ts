import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import {FormsModule} from '@angular/forms';
import { RecserviceService } from './recservice.service' ;
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import {RouterModule} from '@angular/router' ;

@NgModule({
  declarations: [ AppComponent, HelloComponent, HomeComponent, DataComponent ],
  imports: [ BrowserModule,  FormsModule , HttpClientModule,
            RouterModule.forRoot(
             [ {   path: 'data',   component: DataComponent   },
               {   path: '',  component: HomeComponent   },
             ])
          ],
  providers: [RecserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
