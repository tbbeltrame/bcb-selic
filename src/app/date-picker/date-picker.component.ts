import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { DatePipe } from '@angular/common'

import { SelicResponse, SelicService } from './../selic.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date(1986, 6, 4);
  maxDate = new Date();
  selics: SelicResponse[];

  dataInicial: string = '10/10/2020';
  dataFinal: string = '11/11/2020';

  constructor(private selic: SelicService) { }

  ngOnInit() { }

  addEvent1(type: SelicService, event: MatDatepickerInputEvent<Date>) {
    this.dataInicial = event.value.toLocaleDateString('pt-BR');
    return this.dataInicial;
  }

  addEvent2(type: SelicService, event: MatDatepickerInputEvent<Date>) {
    this.dataFinal = event.value.toLocaleDateString('pt-BR');
    this.selic.getSelic(this.dataInicial, this.dataFinal).subscribe(dados => this.selics = dados);
  }
}
