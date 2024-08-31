import { Injectable } from '@angular/core';


export interface IIntervalService {
  getIntervals(): Promise<[]>
};

@Injectable({
  providedIn: 'root'
})
export class IntervalServiceService implements IIntervalService {

  constructor() { }
  public async getIntervals(): Promise<any> {
    const response =  await fetch('https://localhost:44337/api/intervals');
    console.log('response', response);
}
}
