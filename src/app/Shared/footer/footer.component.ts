import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  viewSettingsDrop: boolean= false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 
 
   logout() {
     this.router.navigate(['/login'])
   }
}
