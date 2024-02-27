import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de-DE',
      // defaultLanguage: 'de-DE',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})

@Injectable({
  providedIn: 'root'
})

export class TranslationService {
  
  selectedLanguage: string = 'de-DE';
  constructor(private translateService: TranslateService){ }

  selectLanguage(language: string): void{
     this.translateService.use(language);
     this.selectedLanguage = language;
  }

}
