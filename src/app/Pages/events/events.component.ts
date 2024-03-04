import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  storageUrl = environment.storageUrl;
  constructor(private eventService: CommonService) {}

  ngOnInit(): void {
    this.eventService.getAllEvents(1).subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
}

}
