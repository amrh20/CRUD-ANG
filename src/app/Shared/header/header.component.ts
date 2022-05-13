import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  slideMenu: boolean= false
  viewSettingsDrop: boolean= false
  viewDropContent: boolean= false

  constructor(private router:Router) { }

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
   this.viewDropContent= !this.viewDropContent
  }

}
