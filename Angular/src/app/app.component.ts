import { Component} from '@angular/core';
//import {RouterOutlet} from '@angular/router';
import {OnInit, OnChanges} from '@angular/core';
import {AppService, IAppService} from './app.service';
import {Interval} from "./models/intervals.model";
import {NgClass,NgStyle} from "@angular/common";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  //  RouterOutlet
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles : [
    `intervalContainer: {background-color: #f0f0f0;}`,
  ]
})

export class AppComponent implements OnInit,OnChanges
{
  loading = false;
  title = 'Angular';
  //intervals: Observable<any[]> = [];
  intervals: Interval[] = [];
  service: AppService;
  errorMessage: string = '';

  constructor(appService: AppService) {
    console.log('App Component Constructor - IntervalService', appService);
    this.service  = appService;
  }

   async ngOnInit() {
    console.log('App Component Initialized - Fetching');
    this.intervals = await this.fetchData();
    // this.service.getIntervals().subscribe(
    //   (response:any) => {                           //next() callback
    //     console.log('response received')
    //     this.intervals = response;
    //   },
    //   (error) => {                              //error() callback
    //     console.error('Request failed with error')
    //     this.errorMessage = error;
    //     this.loading = false;
    //   },
    //   () => {                                   //complete() callback
    //     console.error('Request completed')      //This is actually not needed
    //     this.loading = false;
    //   })
    console.log('Retrieved Intervals', this.intervals);
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(intervals => this.intervals = intervals)
    //   .catch(err => console.error(err));
  }
  ngOnChanges(change: any) {
    console.log('App Component Changed',change);
  }
  // fetchData(): Observable<Interval[]> {
  //   return this.service.getIntervals();
  // }
  async fetchData():Promise<Interval[]>{
    return await this.service.getIntervals();
  }

  protected readonly Array = Array;
}
