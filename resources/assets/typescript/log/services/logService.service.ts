/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Log }           from '../model/log.model';
import {Observable} from 'rxjs/Rx';
import {SharedService} from '../../SharedService'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DatePipe } from '@angular/common';
@Injectable()
export class LogService {
     userData: any;
     private date;
     private user_email;
     // Resolve HTTP using the constructor
     constructor (private http: Http,private ss:SharedService,private datePipe: DatePipe) {}

 CheckIn (email): Observable<Log[]> {

         this.date =  new Date();
         this.date = this.datePipe.transform(this.date, 'dd MM yyyy HH:mm:ss');
         console.log(this.date);
        var bodyString = 'user_email='+email +'&checkin='+this.date;

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('/checkin', bodyString, options) // ...using post request
                         .map(response => { return response.json()}) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error || 'Server error' )); //...errors if any
    }

    CheckOut (email,log_id): Observable<Log[]> {
            this.date = new Date();
            this.date = this.datePipe.transform(this.date, 'dd MM yyyy HH:mm:ss');

           var bodyString = 'user_email='+email +'&checkin='+this.date+ '&log_id=' + log_id;

           let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

           let options = new RequestOptions({ headers: headers }); // Create a request option

           return this.http.post('/checkout', bodyString, options) // ...using post request
                            .map(response => { return response.json()}) // ...and calling .json() on the response to return data
                            .catch((error:any) => Observable.throw(error || 'Server error' )); //...errors if any
       }
       getLogs() : Observable<any>{
            this.user_email = this.ss.getUserDetail();
                // ...using get request
                return this.http.get('/logs/' + this.user_email.email)
                               // ...and calling .json() on the response to return data
                                .map(response => { return response.json()})
                                //...errors if any
                                .catch((error:any) => Observable.throw(error || 'Server error'));

            }

            logout() : Observable<any>{
                     // ...using get request
                     return this.http.get('/logout')
                                    // ...and calling .json() on the response to return data
                                     .map(response => { return response.json()})
                                     //...errors if any
                                     .catch((error:any) => Observable.throw(error || 'Server error'));

                 }


}
