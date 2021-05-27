import { DatePickerRoutingModule } from './date-picker-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { SelicModule } from './../selic/selic.module';
import { DatePickerComponent } from './date-picker.component';
import { TranslateModule } from '@ngx-translate/core';
import { SelicComponent } from '../selic/selic.component';

@NgModule({
  declarations: [DatePickerComponent],
  imports: [
    CommonModule,
    DatePickerRoutingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    SelicModule,
    TranslateModule,
    ],
  exports: [DatePickerComponent],
})
export class DatePickerModule {}

