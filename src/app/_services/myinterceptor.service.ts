import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyInerceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //  const token = localStorage.getItem('token');
    //  const reqclone=req.clone({headers:req.headers.append('authorization', `${token}`)});

    const token = localStorage.getItem('token');
    let reqclone;
    if (token) {
      const headers = new HttpHeaders({
        authorization: token,
      });
      reqclone = req.clone({ headers });
    } else {
      reqclone = req;
    }

    //  req.headers.append('authorization',`Bearer${token}`);

    console.log(reqclone);
    return next.handle(reqclone)
  }


}

