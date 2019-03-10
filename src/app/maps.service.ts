import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

interface Location {
  latitude: string,
  longitude: string,
  ip: string,
  city: string,
  region: string,
  country_name: string
}

@Injectable({
  providedIn: 'root'
})

export class MapsService {
  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('https://ipapi.co/json/')
  }
}
