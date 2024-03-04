import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  handleScrollNext() {
    const cards = document.querySelector('.card-content') as HTMLElement;
    cards.scrollLeft += window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
  }

  handleScrollPrev() {
    const cards = document.querySelector('.card-content') as HTMLElement;
    cards.scrollLeft -= window.innerWidth / 2 > 600 ? window.innerWidth / 2 : window.innerWidth - 100;
  }
  

}



