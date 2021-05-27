import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  minDate = new Date(1986, 6, 4);
  maxDate = new Date();
  startDate: Date;
  endDate: Date;
  ready: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {}

  startDateChange(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
    this.ready = false;
  }

  endDateChange(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
    this.ready = true;
    
  }
}
