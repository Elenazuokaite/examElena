import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ElenaService {

  api_key: string = 'a5cf6221-5883-44c2-b7fa-df681fad7b03';
  id: number;

  constructor(private http: HttpClient) { }

  getMeme() {
    this.id = Math.floor(Math.random() * 1000);
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID=' + this.id + '&apiKey=' + this.api_key);
  }
  next() {
    this.id += 1;
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID=' + this.id + '&apiKey=' + this.api_key);
  }
  prev() {
    this.id -= 1;
    return this.http.get('http://version1.api.memegenerator.net//Instance_Select?instanceID=' + this.id + '&apiKey=' + this.api_key);
  }
}
