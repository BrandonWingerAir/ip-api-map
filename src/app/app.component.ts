import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lat: string = '';
  long: string = '';
  ip: string = '';
  city: string = '';
  region: string = '';
  country: string = '';

  location: Object;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.long = data.longitude;
      this.ip = data.ip;
      this.city = data.city;
      this.region = data.region;
      this.country = data.country_name;
    })
  }
}
