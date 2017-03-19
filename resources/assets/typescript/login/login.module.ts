import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { LoginComponent } from './components/login.component';
import { RouterModule } from '@angular/router';
import {LogsComponent} from '../log/components/logs.component';
import { LoginService } from './services/login.service';
import { routing } from '../app.routing';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    routing,


  ],
  declarations: [
    LoginComponent,
    LogsComponent
  ],

  providers: [
      LoginService
  ],

  exports:[
    LoginComponent
  ]

})
export class LoginModule {
}
