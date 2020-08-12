import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à Wookies';
  subTitle = 'La super application';
  valeurARechercher = '';

  // private _loggerService: LoggerService = null;

  // constructor(loggerService: LoggerService) {
  //   this._loggerService = loggerService;
  // }
  
  constructor(private _loggerService: LoggerService) {
  }

  rechercherSelfies(valeur: string) {
    this._loggerService.log('AppComponent', valeur);
    this.valeurARechercher = valeur;
  }
}
