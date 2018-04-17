import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { PrimengModule } from './components/primeng/primeng.module';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import { MeetingHistoryComponent } from './meeting/meeting-history/meeting-history.component';
import { MapComponent } from './map/map.component';
import { ActivityService } from './services/activity.service';
import { MeetingComponent } from './meeting/meeting.component';
import { AddMeetingComponent } from './meeting/add-meeting/add-meeting.component';
import { MeetingListComponent } from './meeting/meeting-list/meeting-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginService } from './services/login.service';
import { SettingComponent } from './setting/setting.component';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { TeamComponent } from './team/team.component';
import { TrackmeComponent } from './trackme/trackme.component';

const appRoutes: Routes = [
  { path: 'meetings', component: MeetingComponent },
  { path: 'addmeeting', component: AddMeetingComponent },
  { path: 'addclient', component: AddClientComponent },
  { path: 'map',      component: HomeComponent },
  { path: 'trackme',      component: TrackmeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'client',      component: ClientComponent },
  { path: 'team',      component: TeamComponent },
  { path: 'settings',      component: SettingComponent },
  { path: '',      component: AppComponent },
  {
    path: 'MeetingList',
    component: MeetingListComponent,
    data: { title: 'Meeting List' }
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
    PagenotfoundComponent,
    SettingComponent,
    ClientComponent,
    AddClientComponent,
    ClientListComponent,
    TeamComponent,
    TrackmeComponent
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
    FlexLayoutModule,
    PrimengModule
  ],
  providers: [ActivityService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
