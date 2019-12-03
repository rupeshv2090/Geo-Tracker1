import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { } from '@types/googlemaps';
import { HttpClient, HttpEventType } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
  accuracy: any;
  displayMessage: string = '';
  form: FormGroup;
  error: string;
  userId: number = 1;
  uploadResponse = { status: '', message: '', filePath: '' };
  fileData: File = null;
constructor( private formBuilder: FormBuilder, private http: HttpClient, private el: ElementRef) { }
setDisplayMessage(msg: string) {
   this.displayMessage = msg;
 }

 fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
}


onSubmit1() {
  debugger
  const formData = new FormData();
  formData.append('file', this.fileData);
  this.http.post('http://localhost:4200/assets/upload', formData)
    .subscribe(res => {
      console.log(res);
      alert('SUCCESS !!');
    })
}
  ngOnInit() {

    this.form = this.formBuilder.group({
      avatar: ['']
    });

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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('avatar').setValue(file);
    }
  }
  onSubmit() {
    debugger
    const formData = new FormData();
    formData.append('file', this.form.get('avatar').value);
const endpoint = '/assets/upload/';
    // this.http.post(endpoint, formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => {
    //     this.error = err;
    //     console.log(err);
    //   }
    // );

    this.http.post('url/to/your/api', formData, {
      reportProgress: true,
      observe: 'events'
  })
  .subscribe(events => {
      if(events.type === HttpEventType.UploadProgress) {
          console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
      } else if(events.type === HttpEventType.Response) {
          console.log(events);
      }
  })
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
    // this.currentLat = position.coords.latitude;
    // this.currentLong = position.coords.longitude;

    // const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    // this.map.panTo(location);

    // if (!this.marker) {
    //   this.marker = new google.maps.Marker({
    //     position: location,
    //     map: this.map,
    //     title: 'Got you(Position)!'
    //   });
    // } else {
    //   this.marker.setPosition(location);
    // //   var getInfoWindow = new google.maps.InfoWindow({
    // //     content: "<b>Your Current Location</b><br/> Latitude:" +
    // //     this.currentLat + "<br /> Longitude:" + this.currentLong + ""
    // // });
    // //   getInfoWindow.open(this.map, this.marker);
    // }

      const icon = {
      // url: './favicon.ico',
      scaledSize: new google.maps.Size(30, 30), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0)
  };
  const myLatLng = new google.maps.LatLng(position.coords.latitude,
          position.coords.longitude);
  this.marker = new google.maps.Marker({
      position : myLatLng,
      map: this.map,
      icon: icon,
      draggable : false,
      title : 'Mark Home'
  });

  this.map.panTo(myLatLng);
  this.accuracy = position.coords.accuracy;

  google.maps.event.addListener(this.map, 'dragstart', function() {
  });
  google.maps.event.addListener(this.map, 'dragend', function() {
  });
  google.maps.event.addListener(this.map, 'center_changed', function() {
  });
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


  upload() {
    //this.activeModal.dismiss('Cross click');
  }

 onChange(event) {
   debugger;
  let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');

 let fileCount: number = inputEl.files.length;

 let formData = new FormData();

 if (fileCount > 0) { // a file was selected

   formData.append('photo', inputEl.files.item(0));
   const uploadURL = '/assests/upload';
   this.http
     .post(uploadURL, formData).map((res: Response) => res.json()).subscribe(
     // map the success function and alert the response
     (success) => {
       alert("success");
     },
     (error) => alert(error || JSON));
    }

   }
}
