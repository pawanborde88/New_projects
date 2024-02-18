import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements AfterViewInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngAfterViewInit() {
    const navBar = this.el.nativeElement.querySelectorAll('.nav-link');
    const navCollapse = this.el.nativeElement.querySelector('.navbar-collapse.collapse');

    navBar.forEach((a: any) => {
      this.renderer.listen(a, 'click', () => {
        this.renderer.removeClass(navCollapse, 'show');
      });
    });
  }

}

