import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interval } from './interval.model';

@Injectable({
  providedIn: 'any',
  useClass: IntervalsService,
})
export class IntervalsService{
  private apiUrl = 'https://localhost:44337/api/Interval';

  constructor(private http: HttpClient) {
    console.log('Init IntervalsService');
  }

  ngOnInit(): void {
    console.log('NG INIT Init IntervalsService');
  }

  getIntervals(): Observable<Interval[]> {
    console.log('Getting Intervals from API');
    return this.http.get<Interval[]>(this.apiUrl);
  }

}
