import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  currentLat: string;
  currentLong: string;
  marker: google.maps.Marker;
  isTracking: boolean;
  constructor() { }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    }
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.showTrackingPosition(position);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you(Position)!'
      });
    } else {
      this.marker.setPosition(location);
    //   var getInfoWindow = new google.maps.InfoWindow({
    //     content: "<b>Your Current Location</b><br/> Latitude:" +
    //     this.currentLat + "<br /> Longitude:" + this.currentLong + ""
    // });
    //   getInfoWindow.open(this.map, this.marker);
    }
  }

  showTrackingPosition(position) {
    console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you(Tracking)!'
      });
    } else {
      this.marker.setPosition(location);
    }
  }
}
