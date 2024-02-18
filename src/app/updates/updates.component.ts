import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  banner: any;
  bannerData: any = {
    account_id: 1,
    user_id: 8,
    role_id: 1,
    image: 'src\assets\Matchday Final Logo version(Transparent).png',
    short_description: '',
    active_status_id: 1,
    created_by: 8,
    alt_tag: '',
  };
  bannerIdsToDelete: number[] = [12];
  banners: any[] = [];
  constructor(private commonService: CommonService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.fetchBannerData();
    const bannerId = 14;
    this.fetchSingleBannerData(bannerId);
  }
  fetchBannerData(): void {
    const accountId = 1;
    this.commonService.fetchBanner(this.bannerData.account_id).subscribe(
      (response) => {
        this.banners = response;
      },
      (error) => {
        console.error('Error fetching banner data:', error);
      }
    );
  }

  addBanner(){
    this.commonService.addBanner(this.bannerData).subscribe(
      (response) => {
        console.log('API Response:', response);
        alert("Add Banner Images")
        this.fetchBannerData();
      },
      (error)=>{
        console.error('Error adding banner:', error);
      }
    )
  }
  deleteBanner(id:any): void {
    this.commonService.deleteBanner(this.bannerIdsToDelete).subscribe(
      (response) => {
        console.log('API Response:', response);
        // Refresh the banner list or perform any other actions after deletion
      },
      (error) => {
        console.error('Error deleting banner:', error);
      }
    );
  }
  fetchSingleBannerData(bannerId: number): void {
    this.commonService.fetchSingleBanner(bannerId).subscribe(
      (response) => {
        this.banner = response;
      },
      (error) => {
        console.error('Error fetching single banner data:', error);
      }
    );
  }
  getImageUrl(imagePath: string): SafeUrl {
    // Assuming the images are hosted in the same domain as the Angular app
    const imageUrl = `${window.location.origin}/${imagePath}`;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
