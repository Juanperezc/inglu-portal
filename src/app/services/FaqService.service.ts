import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor(private http: HttpClient) {}




  async index(perPage = 999) {
    let params = new HttpParams();
    params = params.append("per_page", perPage.toString());
    return await this.http
      .get(environment.endpoint + `/faqs`, {
        params: params,
      })
      .toPromise();
  }
}
