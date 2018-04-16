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
import { MeetingHistoryComponent } from './meeting-history/meeting-history.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './services/activity.service';
import { MeetingComponent } from './meeting/meeting.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'meetings', component: MeetingComponent },
  { path: 'map',      component: HomeComponent },
  {
    path: 'MeetingList',
    component: MeetingListComponent,
    data: { title: 'Meeting List' }
  },
  { path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MeetingHistoryComponent,
    MapComponent,
    MeetingComponent,
    AddMeetingComponent,
    MeetingListComponent,
    PagenotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
     // Angular
     BrowserModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
    BrowserModule,
    AngularMaterialModule,
    PrimengModule
  ],
  providers: [ActivityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
