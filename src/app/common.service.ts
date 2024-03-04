import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private BannerUrl = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api';
  constructor(private http: HttpClient) {}

  fetchBanner(accountId: number): Observable<any> {
    const requestPayload = { account_id: accountId };
    return this.http.post<any>(`${this.BannerUrl}/fetch_banner`, requestPayload);
  }


  fetchSingleEvent(slug: string) {
    return this.http.post(`${this.BannerUrl}/fetch_single_event`, {slug});
   }
  getAllEvents(accountId: number): Observable<any> {
    const requestData = {
      account_id: accountId,
    };
    return this.http.post(`${this.BannerUrl}/fetch_all_events`, requestData);
  }
}
