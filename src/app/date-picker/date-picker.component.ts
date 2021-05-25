import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { Selic, SelicService } from './../selic.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  minDate = new Date(1986, 6, 4);
  maxDate = new Date();
  selicData: Selic[] = [];

  startDate: Date;
  endDate: Date;
  hidden: boolean = true;
  hiddenLoader: boolean = false;

  constructor(private selicService: SelicService, @Inject(LOCALE_ID) private localeId: string) {}

  ngOnInit() {}

  startDateChange(event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
  }

  endDateChange(event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
    if (this.startDate <= this.endDate) {
      this.hidden = true;
      this.hiddenLoader =  true;
      this.selicService.getSelic(this.startDate, this.endDate).subscribe((data) => {
        this.selicData = data;
        this.hiddenLoader = !data.length;
        this.hidden = !data.length;
      });
    } else {
      alert('A data inicial deve ser anterior à data final!');
      this.hiddenLoader = false;
      this.hidden = true;
    }
  }
}
