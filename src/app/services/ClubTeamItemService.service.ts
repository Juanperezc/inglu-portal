import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClubTeamItemService {
  constructor(private http: HttpClient) {}


  async index() {
    return await this.http.get(environment.endpoint + `/site_team_members`).toPromise();
  }
  async show(id) {
    return await this.http.get(environment.endpoint + `/site_team_members/` + id).toPromise();
  }

  
}
