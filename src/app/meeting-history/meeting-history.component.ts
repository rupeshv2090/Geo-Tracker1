import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-meeting-history',
  templateUrl: './meeting-history.component.html',
  styleUrls: ['./meeting-history.component.css']
})
export class MeetingHistoryComponent implements OnInit {
activities: IActivity[];
totalActivities: number;
totalDistance: number;
firstDate: Date;
  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this._activityService.getActivities();
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.firstDate = this._activityService.getFirstDate(this.activities);
  }

}
