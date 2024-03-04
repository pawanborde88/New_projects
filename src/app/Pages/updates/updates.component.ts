import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {
  selectedImage: string | ArrayBuffer | null = null;
  banner: any;
  bannerData: any = {
    account_id: 1,
    user_id: 8,
    role_id: 1,
    image: '',  // You need to bind this to the input file in the HTML
    short_description: 'fhfyjtkukukgg',
    active_status_id: 1,
    created_by: 8,
    alt_tag: 'ghrgerth',
  };
  bannerIdsToDelete: number[] = [12];

  banners: any[] = [];
  constructor(private commonservice: CommonService) {}
  imageData: File | undefined;
  ngOnInit(): void {
    this.fetchBannerData();
  }
  fetchBannerData(): void {
    this.commonservice.fetchBanner(this.bannerData.account_id).subscribe(
      (response) => {
        console.log(response);

        this.banners = response;
      },
      (error) => {
        console.error('Error fetching banner data:', error);
      }
    );
  }
  onFileChange(event: any): void {
    this.imageData = event.target.files[0];
  }

}
