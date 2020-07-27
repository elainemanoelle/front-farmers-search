import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { SearchParams } from '../model/search-params';
import { Farmer } from '../model/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
  apiRoot = environment.url;

  constructor(private httpClient: HttpClient) {
  }

  searchFarmers(params: SearchParams): Promise<Farmer[]> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/farmers/${params}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          res => {
            const result = Object.values(res);

            if (result.length) {
              let data: Farmer[] = [];

              result.map(item => {

                data.push({
                  id: item.name,
                  name: item.name,
                  document: {
                    documentNumber: item.document_number,
                    documentType: item.document_type,
                  },
                  address: {
                    street: item.street,
                    state: item.state,
                    city: item.city,
                    country: item.country
                  }
                });

              });

              resolve(data);
            } else {
              reject('Nenhum dado retornado');
            }

          }
        ).catch(err => {
          console.log('ERRO: Ocorreu algum problema no banco de dados, tente novamente.')
        });
    });
  }
}
