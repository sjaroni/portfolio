import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  getLanguage: string | undefined;

  constructor() { }
}
