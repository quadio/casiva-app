import {Injectable}     from 'angular2/core';
import {Http, Response/*, Headers, RequestOptions*/} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Contact}        from '../models/contact';

@Injectable()
export class ContactService {

  private _contactsUrl = 'contacts';  // URL to web api

  constructor(private http:Http) {
  }

  getContact(id: string) {
    return this.http.get(this._contactsUrl)
                    .map(res => <Contact[]> res.json().data)
                    .catch(this.handleError);
  }

  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
