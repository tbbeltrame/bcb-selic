import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SelicService {
  private readonly selicApi = 'http://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados';

  constructor(private http: HttpClient) {}

  getSelic(startDate: Date, endDate: Date): Observable<Selic[]> {
    const dataInicial = startDate.toLocaleDateString('pt-BR');
    const dataFinal = endDate.toLocaleDateString('pt-BR');
    const params = new HttpParams({ fromObject: { format: 'json', dataInicial, dataFinal } });
    return this.http.get<SelicResponse[]>(this.selicApi, { params }).pipe(
      map((resp) =>
        resp.map((value) => {
          const [day, month, year] = value.data.split('/').map((value) => Number(value));
          return {
            data: new Date(year, month - 1, day),
            valor: Number(value.valor),
          };
        })
      )
    );
  }
}

export interface SelicResponse {
  data: string;
  valor: string;
}

export interface Selic {
  data: Date;
  valor: number;
}
