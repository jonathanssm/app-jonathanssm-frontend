import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {CountryDTO} from "../model/dto/country-dto";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {
  }

  list: CountryDTO[] = [];

  findAll = (): Observable<CountryDTO[]> => {
    return this.httpClient.get<CountryDTO[]>('https://api-paises.pages.dev/paises.json').pipe(
      map(resp => {
        for (let i = 0; i <= 235; i++) {
          resp[i].strToShow = resp[i].pais + ' +' + resp[i].ddi;

          this.list.push(resp[i]);
        }

        return this.list;
      })
    );
  }

}
