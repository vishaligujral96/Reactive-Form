import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AppRoutingModule } from './/app-routing.module';


import { DataComponent } from './data/data.component';



@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,

    
  ReactiveFormsModule,

    
  AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
