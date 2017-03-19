import {Component, EventEmitter, Input, OnChanges,OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { LogService } from '../services/logService.service';
import {User,SharedService} from '../../SharedService'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'dashboard',
    providers: [LogService],
    template: `
    <div class="loader" *ngIf="loader">
        <img src="../../images/loader-img.gif" alt="" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading">Dashboard</div>

                    <div class="panel-body">
                        You are logged in! Welcome <span>{{ user.name }} </span>
                        <button type="submit" class="logout btn btn-primary"  (click)="logout()">Logout</button>
                        <hr/>
                        <table class="table">
                            <thead>
                              <tr>
                                <th>Checkin time</th>
                                <th>Checkout time</th>
                                <th>Total time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr *ngFor="let log of logs">
                                <td>{{log.checkin}} </td>
                                <td>{{log.checkout}}</td>
                                <td>{{log.total_time}}</td>
                              </tr>
                            </tbody>
                          </table>
                    </div>

                    <button *ngIf="checking" type="submit" class="btn btn-primary btn-block" (click)="checkout(user?.email)">Checkout</button>
                    <button *ngIf="!checking" type="submit" class="btn btn-warning btn-block" (click)="checkin(user?.email)">Checkin</button>
                </div>
            </div>
        </div>
    </div>
 `
})

export class LogsComponent implements OnInit, OnChanges {
 private checking = false;
 logs: any;
 log_id:any;
 user:User;
 loader = false;


 constructor(
     private logService: LogService,
     private router: Router,
     private ss:SharedService
     ){}

    checkin(values){
        this.loader = true;
    var current = this;
    // Variable to hold a reference of addComment/updateComment
    let logOperation:Observable<any>;
    logOperation = this.logService.CheckIn(values);
    logOperation.subscribe(
      res => {
          this.checking = true;
          this.log_id = res.log_id;
          this.loader = false;
       },
      err => { this.loader= false;}

   );
   }
  checkout(values){
    this.loader = true;
  var current = this;
  // Variable to hold a reference of addComment/updateComment
  let logOperation:Observable<any>;
  logOperation = this.logService.CheckOut(values,this.log_id);
  logOperation.subscribe(
    res => {
        this.checking = false;
        this.loader = false;
     },
    err => { this.loader = false; }

 );
   this.loadLogs();
 }

logout(){
  this.loader = true;
  var current = this;
  this.logService.logout()
                  .subscribe(
                    res => {
                        if(res.isLoggedIn == false){
                          this.loader = false;
                          localStorage.removeItem('user');
                          current.router.navigate(['']);

                        }
                     },
                    err => { this.loader = false;}
                  );
}

 loadLogs(){
        this.loader = true;
      // Get all comments
       this.logService.getLogs()
                         .subscribe(
                           res => {
                              this.logs =res.logs;
                              this.loader = false;


                            },
                           err => { this.loader = false; }

                        );
  }
 ngOnInit(){
          // Load comments
          this.loadLogs()
          this.user=this.ss.getUserDetail();
  }


  ngOnChanges(changes:any) {
      // Listen to the 'list'emitted event so as populate the model
      // with the event payload

    }

}
