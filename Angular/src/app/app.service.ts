import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OnInit} from '@angular/core';
import {Interval} from "./models/intervals.model";
import {Observable} from "rxjs";
export interface IAppService {
  // getIntervals(): Observable<any>
  // getIntervals(): Interval[]
  getIntervals(): Promise<Interval[]>
}

@Injectable({
  providedIn: 'root'
})
export class AppService implements IAppService {
  http: HttpClient;
  apiRootUrl = '/api';
  constructor(http: HttpClient) {
    console.log('IntervalService Constructor - HttpClient', http);
    this.http = http;
  }
  // getIntervals(): Observable<any> {
  //   return this.http.get(this.apiRootUrl);
  // }
  // getIntervals(): Interval[]{
  //   return this.http.get(this.apiRootUrl);
  // }
  async getIntervals(): Promise<Interval[]> {
    return await fetch(this.apiRootUrl,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Upgrade-Insecure-Requests': '1'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        return data;
      })
      .catch(err => console.error(err));
    //return await this.http.get<Interval[]>('/api/intervals'); // Replace with your API endpoint
  }
  // getIntervals(): Observable<Interval[]> {
  //   return this.http.get<Interval[]>('/api/intervals'); // Replace with your API endpoint
  // }
  // public async getIntervals(): Promise<any> {
  //   const response = await fetchData(this.apiRootUrl, this.http);
  //     //await fetch(this.apiRootUrl);
  //   console.log('response', response);
  // }
}
