import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
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
  @Output() otpVerified: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.otpSend = false;
    console.log('email start');
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

  sendOTP = () => {
    this.otpSend = true;
  }

  verifyOTP = () => {
    this.verifing = true;
    if (this.otpNumber.toString() === '1234') {
      // this.router.navigate[];
      this.otpVerified.emit(true);
      this.verifing = false;
      console.log('Verified Successfully.');
    }

  }
}
