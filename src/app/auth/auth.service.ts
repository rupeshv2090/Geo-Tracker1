// // import { Injectable } from '@angular/core';
// // import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent} from '@angular/common/http';
// // import { Observable } from 'rxjs/Observable';
// // import { ReplaySubject } from 'rxjs/ReplaySubject';
// // import 'rxjs/add/operator/do';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/add/operator/catch';
// // import 'rxjs/add/observable/throw';

// // // import { WindowRef } from '../common/windowref';
// // import { IAccessToken, AccessTokenFactory, IUserData } from './access-token';
// // // import { AppConfig } from '../app.config';

// // const accessTokenKey = 'access_token';
// // const contextKey = 'operator_context';
// // const clientId = 'Sentinel.Web';

// // interface Auth0Response {
// //   access_token: string;
// //   id_token: string;
// //   token_type: string;
// //   expires_in: number;
// // }

// // @Injectable()
// export class AuthService {
//   private token: IAccessToken = AccessTokenFactory.empty;
//   private localStorage: Storage;
//   private sessionStorage: Storage;

// //   private userSubject = new ReplaySubject<IUserData>(1);
// //   public user$: Observable<IUserData> = this.userSubject.asObservable();

// //   get rawToken(): string { return this.token.raw; }
// //   get user(): IUserData { return this.token; }

// //   constructor(
// //     // windowRef: WindowRef,
// //     private http: HttpClient,
// //    // private config: AppConfig
// //   ) {
// //    // const win: Window = windowRef.nativeWindow;
// //     this.localStorage = win.localStorage;
// //     this.sessionStorage = win.sessionStorage;

// //     this.userSubject.next(this.token);
// //     const storedAccess = this.localStorage.getItem(accessTokenKey);
// //     if (storedAccess) {
// //       this.update(storedAccess);
// //     }

// //     const storedContext = this.sessionStorage.getItem(contextKey);
// //     if (storedContext) {
// //       this.enterContext(storedContext);
// //     }

// //     win.addEventListener('storage', this.storageEvent.bind(this));
// //   }

//   public logout(): void {
//     this.localStorage.removeItem(accessTokenKey);
//     this.sessionStorage.removeItem(contextKey);
//     this.token = AccessTokenFactory.empty;
//     this.userSubject.next(this.token);
//   }

// //   public login(email: string, password: string): Observable<boolean> {
// //     return this.http.post(this.config.auth0.url + '/oauth/token', {
// //       grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
// //       client_id: this.config.auth0.clientId,
// //       username: email,
// //       password: password,
// //       realm: this.config.auth0.connection,
// //       scope: 'openid email'
// //     }, {})
// //       .do((response: Auth0Response) => this.update(response.id_token))
// //       .map(_ => true)
// //       .catch(handleError);

// //     function handleError(err: HttpErrorResponse | any) {
// //       console.error('Invalid Login Attempt', err);
// //       return Observable.throw(err.error.error_description || 'Invalid Login Attempt');
// //     }
// //   }

// //   public resetPassword(email: string): Observable<boolean> {
// //     return this.http.post(this.config.auth0.url + '/dbconnections/change_password', {
// //       client_id: this.config.auth0.clientId,
// //       connection: this.config.auth0.connection,
// //       email: email
// //     })
// //     .map(_ => true);
// //   }

// //   public enterContext(op: string) {
// //     if (this.token.roles.includes('Host')) {
// //       this.token = AccessTokenFactory.withContext(this.token, op);
// //       this.userSubject.next(this.token);
// //       this.sessionStorage.setItem(contextKey, op);
// //     }
// //   }

// //   public exitContext() {
// //     if (this.token.isInContext) {
// //       this.token = AccessTokenFactory.fromJwt(this.token.raw);
// //       this.userSubject.next(this.token);
// //       this.sessionStorage.removeItem(contextKey);
// //     }
// //   }

// //   private storageEvent(e: StorageEvent) {
// //     if (e.key === accessTokenKey && e.storageArea === this.localStorage) {
// //       if (e.newValue) {
// //         this.update(e.newValue);
// //       } else {
// //         this.logout();
// //       }
// //     }
// //   }

// //   private update(raw: string) {
// //     this.token = AccessTokenFactory.fromJwt(raw);
// //     if (this.token.isLoggedIn) {
// //       this.localStorage.setItem(accessTokenKey, raw);
// //       this.userSubject.next(this.token);
// //     } else {
// //       this.logout();
// //     }
// //   }
// }
