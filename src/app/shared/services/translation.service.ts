import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// neu
import { BehaviorSubject } from 'rxjs';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-GB',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
@Injectable({
  providedIn: 'root',
})

export class TranslationService {
  selectedLanguage: string = 'en-GB';

  private selectedLanguageSubject: BehaviorSubject<string>;
  selectedLanguage$;

  constructor(private translateService: TranslateService) {
    this.selectedLanguageSubject = new BehaviorSubject<string>('en-GB');
    this.selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  }

  selectLanguage(language: string): void {
    this.translateService.use(language);
    this.selectedLanguageSubject.next(language);
    this.selectedLanguage = language;
  }
}
