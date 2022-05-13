import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Egypt Cars';

  constructor(public translate: TranslateService) {
    translate.addLangs(['ar', 'en']);
    let defaultLang: any = "ar";
    localStorage.getItem('lang') == undefined ? localStorage.setItem('lang', defaultLang) :
     defaultLang = localStorage.getItem('lang');
    if (defaultLang == 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', "rtl");
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', "ltr");
    }
    translate.setDefaultLang(defaultLang);
  }

}
