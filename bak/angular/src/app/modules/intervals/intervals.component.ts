import { Component, OnInit } from '@angular/core';
import { IntervalsService } from './intervals.service';
import { Interval } from './interval.model';

@Component({
  selector: 'app-intervals',
  templateUrl: './intervals.component.html',
  styleUrls: ['./intervals.component.css'],
  standalone: true,
})
export class IntervalsComponent implements OnInit {
  intervals: Interval[] = new Array<Interval>();
  service: IntervalsService;
  interval: Interval = {
    id: 0,
    intervalName: 'intervals',
    recordType: '',
    abbrv: '',
    parentNo: 0,
    color: '',
    tAge: 0,
    bAge: 0,
    referenceNo: 0
  };

  constructor(private intervalsService: IntervalsService) {
    console.log('intervals service constructor - service', intervalsService);
    this.service = intervalsService;

    this.intervalsService.getIntervals().subscribe(data => {
      console.log('intervals component get intervals subscribing - data', data);
      this.intervals = data;
    });
  }

  public ngOnInit() {
    this.intervalsService.getIntervals().subscribe(data => {
      this.intervals = data;
    });
  }
}
