import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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
  @Output() dateRangeChange: EventEmitter<DateRange> = new EventEmitter();
  private _startDate: Date;
  private _endDate: Date;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    //   this._startDate = this.minDate;
    //   this._endDate = this.maxDate;
  }

  onStartDateChange(event: MatDatepickerInputEvent<Date>) {
    this._startDate = event.value;
    if (!(this.startAndEndDateDefined && this.validateDateRange())) {
      return;
    }
    this.emitDateRange();
  }

  onEndDateChange(event: MatDatepickerInputEvent<Date>) {
    this._endDate = event.value;
    if (!(this.startAndEndDateDefined && this.validateDateRange())) {
      return;
    }
    this.emitDateRange();
  }

  private validateDateRange(): boolean {
    const isValid = this._startDate <= this._endDate;
    if (!isValid) {
      alert(this.translate.instant('warning.message-dates'));
    }
    return isValid;
  }

  private emitDateRange() {
    this.dateRangeChange.emit({ from: this._startDate, to: this._endDate });
  }

  private get startAndEndDateDefined() {
    return this._startDate && this._endDate;
  }
}

export interface DateRange {
  from: Date;
  to: Date;
}
