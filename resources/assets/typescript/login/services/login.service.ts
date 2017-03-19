/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Login }           from '../model/login';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
     userData: any;
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}

 Login (body): Observable<Login[]> {

        //let bodyString = JSON.stringify(body); // Stringify payload
        var bodyString = 'email='+body.email +'&password='+body.password;

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});

        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post('/login', bodyString, options) // ...using post request
                         .map(response => { return response.json()}) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error || 'Server error' )); //...errors if any
    }

    setUserData(data: any): void { this.userData = data; }
    getUserData(): any { return this.userData; }

}
