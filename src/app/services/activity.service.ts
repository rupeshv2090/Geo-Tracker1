import { Injectable } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import { SAVED_ACTIVITES } from '../shared/activities';


@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITES.slice(0);
  }

  getTotalActivities(activities: IActivity[]) {
    return activities.length;
  }

  getTotalDistance(activities: IActivity[]) {
    let totalDistance = 0;
    for (let index = 0; index < activities.length; index++) {
      totalDistance += activities[index].distance;
    }
    return totalDistance;
  }

  getFirstDate(activities: IActivity[]) {
    let earliestDate = new Date('01/01/1999');
    for (let index = 0; index < activities.length; index++) {
      const currentDate = activities[index].date;
      if (currentDate < earliestDate) {
        earliestDate = currentDate;
      }
      return earliestDate;
    }

  }
}
