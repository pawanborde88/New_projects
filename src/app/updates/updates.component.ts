import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  bannerList: any[] = [];
  accountId = 1; // Replace with the actual account ID

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getBanner(this.accountId).subscribe(
      (response: any[]) => {
        this.bannerList = response;
      },
      (error: any) => {
        console.error('Error fetching banner data:', error);
      }
    );
  }

  getImageUrl(banner: any): string {
    const imagePath = banner && banner.image;
    return imagePath ? 'https://pw-bms-dev.portalwiz.in/laravelapi/public/' + imagePath : '';
  }

}
