import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DataService } from './core/data.service';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
