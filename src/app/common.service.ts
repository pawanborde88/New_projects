import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private GetBannerUrl = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api';
  private apiUrl = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api';
  private DeleteImage = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api';
  private SingleImageFetch = 'https://pw-bms-dev.portalwiz.in/laravelapi/public/api';

  constructor(private http: HttpClient) {}
  fetchBanner(accountId: number): Observable<any> {
    const requestPayload = { account_id: accountId };
    return this.http.post<any>(`${this.GetBannerUrl}/fetch_banner`, requestPayload);
  }


  addBanner(bannerData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add_banner`, bannerData);
  }

  deleteBanner(bannerIds: number[]): Observable<any> {
    const requestPayload = { banner_id: bannerIds };
    return this.http.post<any>(`${this.DeleteImage}/delete_banner`, requestPayload);
  }
  fetchSingleBanner(bannerId: number): Observable<any> {
    const requestPayload = { banner_id: bannerId };
    return this.http.post<any>(`${this.SingleImageFetch}/fetch_single_banner`, requestPayload);
  }
}
