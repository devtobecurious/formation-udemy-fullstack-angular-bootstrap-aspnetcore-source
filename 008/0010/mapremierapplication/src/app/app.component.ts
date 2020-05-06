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

  rechercherSelfies(valeur: string) {
    console.log('AppComponent', valeur);
    this.valeurARechercher = valeur;
  }
}