import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
// import { Email } from '../../../node_modules/emailjs/email.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  otpSend: boolean;
  mobileNumber: number;
  otpNumber: number;
  verifing: boolean;
  isLoggedIn: boolean;
  loginByMobile: boolean;
  emailId: string;
  ticks = 0;
  @Output() otpVerified: EventEmitter<boolean> = new EventEmitter();
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.otpSend = false;
    const isLoggedIn = localStorage.getItem('isLoggin');
    const loginByMobile = localStorage.getItem('loginByMobile');
    if (isLoggedIn === '1') {
      this.isLoggedIn = true;
      this.loginByMobile = true;
      if (this.loginByMobile) {
        this.mobileNumber = + localStorage.getItem('LoggedBy');
      } else {
        this.emailId = localStorage.getItem('LoggedBy');
      }
    } else {
      this.isLoggedIn = false;
      this.loginByMobile = false;
    }
    // const email 	= require('../../../node_modules/emailjs/email');
    // const server 	= email.server.connect({
    //    user:    'freelancer4u2018@gmail.com',
    //    password: 'Chetu@2018',
    //    host:    'smtp.gmail.com',
    //    ssl:     true,
    //    port: 587
    // });
    // // send the message and get a callback with an error or details of the message that was sent
    // server.send({
    //    text:    'i hope this works',
    //    from:    'Anuj<freelancer4u2018@gmail.com>',
    //    to:      'Rupesh<rupeshvm.976@gmail.com>, anuj<anuj.anand1991@gmail.com>',
    //    cc:      'anuj<anuj.anand1991@rediffmail.com>',
    //    subject: 'testing emailjs'
    // }, function(err, message) { console.log(err || message); });
  }

  changeReuqest() {
    this.otpSend = false;
  }

  resendOTP() {
    this.ticks = 0;
    this.sendOTP();
  }

  sendOTP = () => {
    this.otpSend = true;
    const timer = Observable.timer(2000, 1000);
    timer.subscribe(t => (this.ticks = t));
  }

  verifyOTP = () => {
    this.verifing = true;
    if (this.otpNumber.toString() === '1234') {
      // this.router.navigate[];
      this.otpVerified.emit(true);
      this.verifing = false;
      this.isLoggedIn = true;
      localStorage.setItem('isLoggin', '1');
      localStorage.setItem('loginByMobile', '1');
      localStorage.setItem('LoggedBy', this.loginByMobile === true ? this.mobileNumber.toString() : this.emailId);
      console.log('Verified Successfully.');
    }
  }

  logout() {
    this.otpVerified.emit(false);
    this.isLoggedIn = false;
    localStorage.setItem('isLoggin', '0');
    localStorage.setItem('loginByMobile', '0');
    localStorage.setItem('LoggedBy', '');
    this.router.navigate(['/login']);
  }
}
