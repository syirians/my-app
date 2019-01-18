import { Inject, forwardRef, Injectable, OnInit, OnDestroy } from '@angular/core';
import { Http, RequestOptions, Headers, Response, ResponseContentType } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { Configuration } from '../config';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Injectable()
export class HttpClient implements OnInit, OnDestroy {
  subscription: Subscription;
  serviceData: any;
  url: string;
  obThis: any;
  errorMessage: any;
  callBack: (ob: any, res: any) => any;

  constructor(private http: Http,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe();
  }


  get(url, callBack: (ob: any, res: any) => any = null, ob: any = null, auth: boolean = false, tokenSuper: string = null) {
    this.url = url;
    this.obThis = ob;
    this.callBack = callBack;
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url)
      .map((res: Response) => {
        if (callBack !== undefined && callBack !== null) {
          callBack(ob, res.json());
        }
        return res.json();
      })
      .catch(error => {
        this.handleError(error);
        return this.reject();
      });
  }

  private handleError(error: Response | any) {
    console.log(error);
    if (error.status == 0) {
      console.log("Kesalahan : Koneksi ke server terputus, silahkan coba lagi.");
    } else if (error.status == 500) {
      if (error._body == "") {
        console.log('Error tidak diketahui');
      } else {
        this.errorMessage = JSON.parse(error._body)
        let errorText = '';
        if (this.errorMessage.statusCode == "501" || this.errorMessage.statusCode == 501) {
          for (let i = 0; i < this.errorMessage.errors.length; i++) {
            errorText += this.errorMessage.errors[i].error;
          }
          console.log(errorText);
        } else if (this.errorMessage.statusCode == "502" || this.errorMessage.statusCode == 502) {
          for (let i = 0; i < this.errorMessage.errors.length; i++) {
            errorText += this.errorMessage.errors[i].error;
          }
          console.log(errorText);
        } else {
          for (let i = 0; i < this.errorMessage.errors.length; i++) {
            errorText += this.errorMessage.errors[i].error;
          }
          console.log(errorText);
        }
      }

    } else if (error.status == 401) {
      console.log('Invalid Token');
    } else if (error.status == 429) {
      console.log('Server Sibuk');
    } else if (error.status == 404) {
      console.log('API tidak ditemukan');
    } else if (error.status == 503 || error.status == 504) {
      console.log('Server Sibuk');
    } else {
      console.log('Kesalahan Komunikasi Server');
    }
  }
  private reject() {
    return Promise.reject("koneksi terputus");
  }
}
