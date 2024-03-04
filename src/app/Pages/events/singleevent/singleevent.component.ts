import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-singleevent',
  templateUrl: './singleevent.component.html',
  styleUrls: ['./singleevent.component.css']
})
export class SingleeventComponent {
  storageUrl = environment.storageUrl;
  constructor(private eventService: CommonService,private _activatedRoute: ActivatedRoute,) {}
  singleEvent: any;
  eventSlug: any;
  ngOnInit(): void {
    this.fetchSingleEvent();
  }
  fetchSingleEvent(){
    this._activatedRoute.paramMap.subscribe((params) => {
      this.eventSlug = params.get('slug')!;
    });
    this.eventService.fetchSingleEvent(this.eventSlug ).subscribe({
      next: (res: any) => {
        this.singleEvent=res
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {},
    });
  }
}
