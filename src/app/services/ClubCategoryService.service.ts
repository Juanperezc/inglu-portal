import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ClubCategoryService {
  constructor(private http: HttpClient) {}

  async index(perPage = 10, category_id = null) {
    let params = new HttpParams();
    params =  params.append("per_page", perPage.toString());
    if (category_id){
      params = params.append("category_id", category_id.toString());
    }
    return await this.http
      .get(environment.endpoint + `/post_category`, {
        params: params,
      })
      .toPromise();
  }
  async show(id: number) {
    return await this.http
      .get(environment.endpoint + `/post_category/` + id)
      .toPromise();
  }

  async update(id: number, data: any) {
    return await this.http
      .put(environment.endpoint + `/post_category/` + id, data)
      .toPromise();
  }

  async store(data: any) {
    return await this.http
      .post(environment.endpoint + `/post_category`, data)
      .toPromise();
  }
}
