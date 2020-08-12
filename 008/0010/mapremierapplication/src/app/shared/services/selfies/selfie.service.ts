import { Selfie } from './../../../models/selfie';
import { Injectable, Self } from '@angular/core';
import { Wookie } from 'src/app/models/wookie';
import { LoggerService } from '../logger/logger.service';

/**
 * Service gérant les selfies (CRUD)
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _loggerService: LoggerService) { }

  /**
   * Retourne la liste complète des selfies (ici 2 éléments en dur)
   */
  getAll(): Selfie[] {
    const tableau: Selfie[] = [];

    let selfie = new Selfie();
    selfie.image = '';
    selfie.wookie = new Wookie();
    selfie.wookie.nom = 'Chewie';
    
    tableau.push(selfie);

    tableau.push({
      image: 'https://i.pinimg.com/originals/cf/61/7d/cf617d27d99dfae9f69ec321868cbc65.jpg',
      titre: 'Photo de ouf',
      wookie: {
        nom: 'Turloff',
        selfies: []
      }
    });

    this._loggerService.log('roaar');

    return tableau;
  }
}
