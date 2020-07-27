import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { FarmerSearchAbstractProvider } from '../provider/farmer-search-abstract-provider';
import { environment } from '../../environments/environment';
import { SearchParams } from '../model/search-params';
import { Farmer } from '../model/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService /*extends FarmerSearchAbstractProvider */{
  apiRoot = environment.url;

  constructor(private httpClient: HttpClient) {
    // super();
  }

  searchFarmers(params: SearchParams): Promise<Farmer[]> {
    return new Promise((resolve, reject) => {
      const apiURL = `${this.apiRoot}/farmers/${params}`;
      this.httpClient.get(apiURL)
        .toPromise()
        .then(
          res => {
            console.log('LADY', res);
            // console.log(res.json());
            resolve(res);
          }
        );
    });
  }
}
