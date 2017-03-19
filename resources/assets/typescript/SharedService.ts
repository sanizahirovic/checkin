import {Component, Injectable } from '@angular/core';

export class User{
 email:string;
 name:string;
}

@Injectable()
export class SharedService{
  user:User;
  setUserDetail(res){
   localStorage.setItem('user',JSON.stringify(res));
  }
  getUserDetail(){
    return JSON.parse(localStorage.getItem('user'));
  }
}
