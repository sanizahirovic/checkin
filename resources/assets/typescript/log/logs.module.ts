import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {LogsComponent} from './components/logs.component';
import { LogService } from './services/logService.service';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing


  ],
  declarations: [
    LogsComponent
  ],

  providers: [

  ],

  exports:[
    LogsComponent
  ]

})
export class LogModule {
}
