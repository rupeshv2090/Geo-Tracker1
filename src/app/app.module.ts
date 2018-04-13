import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { PrimengModule } from './components/primeng/primeng.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
     // Angular
     BrowserModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
    BrowserModule,
    AngularMaterialModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
