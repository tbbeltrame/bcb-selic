import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SelicService {
  private readonly SELIC_API =
    "http://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados?formato=json";

  constructor(private http: HttpClient) {}

  getSelic(
    dataInicial: string,
    dataFinal: string
  ): Observable<SelicResponse[]> {
    let params = `${this.SELIC_API}&dataInicial=${dataInicial}&dataFinal=${dataFinal}`;
    return this.http.get<SelicResponse[]>(params);
  }
}

export interface SelicResponse {
  data: Date;
  valor: number;
}
