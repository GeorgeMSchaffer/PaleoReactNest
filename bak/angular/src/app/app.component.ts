import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntervalsService } from './modules/intervals/intervals.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Interval } from './modules/intervals/interval.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [NO_ERRORS_SCHEMA],
//  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, OnChanges {
  title = 'angular';
  apiUrl = 'https://localhost:44337/api/Interval';
  service: IntervalsService;
  constructor(private intervalsService: IntervalsService) {
    this.service = intervalsService;
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('APP CHANGES',changes);
  }
  ngOnInit(): void {
  
    console.log('App onInit!');
//    new HttpClient(this.http).get(this.apiUrl).subscribe(res => console.log(res));
    // const results = this.http.get<Interval[]>(this.apiUrl);
    const results = this.service.getIntervals();
    console.log(`\r\n - AppComponent - ngOnInit - results:`, results);

  }
}
