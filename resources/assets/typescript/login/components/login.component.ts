import {Component, EventEmitter, Input, OnChanges, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { LoginService } from '../services/login.service';
import { Login } from '../model/login'
import {Router} from '@angular/router';
import {SharedService} from '../../SharedService';

@Component({
    selector: 'login',
    template:
    `
    <div class="loader" *ngIf="loader">
        <img src="../images/loader-img.gif" alt="" />
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">

                        <form #form="ngForm" class="form-horizontal" (ngSubmit)="submitLogin(form.value)">

                          <input id="token" type="hidden"  name="_token" value="<?php echo csrf_token(); ?>" >
                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" [(ngModel)]="email">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" [(ngModel)]="password">
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-md-6 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-btn fa-sign-in"></i> Login
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div class="alert alert-danger" *ngIf="error">
                          <strong>{{message}}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

})
export class LoginComponent implements OnInit{
  data : any;
  error = false;
  message:string;
  password:string;
  email:string;
  loader = false;
  // Constructor with injected service
      constructor(
          private loginService: LoginService,
          private router: Router,
          private ss:SharedService
          ){}

      submitLogin(values){
              this.loader = true;
             var current = this;
             // Variable to hold a reference of addComment/updateComment
             let loginOperation:Observable<any>;
             loginOperation = this.loginService.Login(values);
             loginOperation.subscribe(
               res => {
                 if(res.isLoggedIn == true){
                   this.ss.setUserDetail(res.user);
                   this.loader = false;
                    current.router.navigate(['/home']);
                 }
                 else{
                   this.loader = false;
                   this.error = true;
                   this.message = 'Wrong email or password!'
                   this.password = '';
                   this.email = '';
                 }
                },
               err => { console.log(err) }

            );
           }
           ngOnInit(){
             if (localStorage.getItem('user')) {
                 // logged in so return true
                 this.router.navigate(['/home']);
             }
           }
}
