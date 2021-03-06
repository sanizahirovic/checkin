/// <reference path="../../../typings/browser.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DatePipe } from '@angular/common';
import { routing } from './app.routing';
import {SharedService} from './SharedService';
import {AuthGuard} from './app.component';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    routing
  ],
  providers: [SharedService,DatePipe,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {
  LocationStrategy,
  HashLocationStrategy,
}
from '@angular/common';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
*/
