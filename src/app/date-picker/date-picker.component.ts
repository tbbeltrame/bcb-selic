import { Component, OnInit } from "@angular/core";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { DatePipe } from "@angular/common";

import { SelicResponse, SelicService } from "./../selic.service";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"],
})
export class DatePickerComponent implements OnInit {
  minDate = new Date(1986, 6, 4);
  maxDate = new Date();
  selics: SelicResponse[];

  dataInicial: string = "";
  dataFinal: string = "";

  constructor(private selic: SelicService) {}

  ngOnInit() {}

  addEvent1(type: SelicService, event: MatDatepickerInputEvent<Date>) {
    this.dataInicial = event.value.toLocaleDateString("pt-BR");
  }

  addEvent2(type: SelicService, event: MatDatepickerInputEvent<Date>) {
    this.dataFinal = event.value.toLocaleDateString("pt-BR");
    if (this.dataInicial <= this.dataFinal) {
      this.selic
        .getSelic(this.dataInicial, this.dataFinal)
        .subscribe((dados) => (this.selics = dados));
      document.getElementById("tabela").style.visibility = "visible";
    } else {
      alert("A data inicial deve ser anterior à data final!");
      document.getElementById("tabela").style.visibility = "hidden";
    }
  }
}
