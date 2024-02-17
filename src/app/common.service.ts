import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private GetBannerUrl = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api/fetch_banner';

  constructor(private http: HttpClient) {}

  getBanner(accountId: number): Observable<any> {
    const data = { account_id: accountId };
    return this.http.post(this.GetBannerUrl, data);
  }
}
