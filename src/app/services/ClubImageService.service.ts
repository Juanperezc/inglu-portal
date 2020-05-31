import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClubImageService {
  constructor(private http: HttpClient) {}


  async index() {
    return await this.http.get(environment.endpoint + `/site_images`).toPromise();
  }
  async show(id) {
    return await this.http.get(environment.endpoint + `/site_images/` + id).toPromise();
  }

  
}
