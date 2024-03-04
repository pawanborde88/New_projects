import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef,public dialog: MatDialog) {}
  @ViewChild('menuHeader')
  menuHeader!: ElementRef;
  fullScreenTop: string = '-100%';
  flag: number = 0;

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }
  openDialog() {

  }
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
