import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {


  slideMenu: boolean = false
  viewSettingsDrop: boolean = false
  viewDropContent: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.slideMenu = !this.slideMenu
  }

  view() {
    this.viewSettingsDrop = !this.viewSettingsDrop
  }

  logout() {
    this.router.navigate(['/login'])
  }
  viewDrop() {
    this.viewDropContent = !this.viewDropContent
  }


}
