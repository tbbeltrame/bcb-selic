import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent {
  minDate = new Date(1986, 6, 4);
  maxDate = new Date();
  startDate: Date;
  endDate: Date;

  constructor(private translate: TranslateService) {}

  startDateChange(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
  }

  endDateChange(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
  }
}
