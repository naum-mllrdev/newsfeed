import { NgModule } from '@angular/core';

import { DataService } from './data.service';
import { ApiService } from './api.service';

@NgModule({
  providers: [
    DataService,
    ApiService
  ]
})
export class CoreModule { }
