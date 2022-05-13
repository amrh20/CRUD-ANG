import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  isCurrentLangageEn(): boolean {
    return localStorage.getItem('lang') === 'en';
  }

  CurrentLangage(): any {
    const lang = localStorage.getItem('lang') as string;
    return lang;
  }

  languageBehavior: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public constructor(private translate: TranslateService, private router: Router) { }
  useLanguage(): void {

    const direction = this.CurrentLangage() === 'ar' ? 'rtl' : 'ltr';
    let lang = this.CurrentLangage() === 'ar' ? "en" : this.CurrentLangage() === 'en' ? 'ar' : 'ar';
    this.translate.use(lang);

    document.getElementsByTagName('html')[0].setAttribute('dir', direction);
    document.getElementsByTagName('body')[0].setAttribute('dir', direction);
    localStorage.removeItem("lang");
    localStorage.setItem('lang', lang);
    localStorage.setItem('dir', direction);

    window.location.reload();

  }
}
