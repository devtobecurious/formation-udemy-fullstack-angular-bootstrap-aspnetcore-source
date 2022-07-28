import { HttpClient } from '@angular/common/http';
import { Injectable, Self } from '@angular/core';

import { LoggerService } from '../logger/logger.service';
import { Selfie } from './../../../models/selfie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Wookie } from 'src/app/models/wookie';

export type ApiSelfiesResult = {
  result: [{
    nbSelfiesFromWookie: number,
    title: string,
    wookieId: number
  }]
}

/**
 * Service gérant les selfies (CRUD)
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _loggerService: LoggerService, private _httpClient: HttpClient) { }

  /**
   * Retourne la liste complète des selfies (ici 2 éléments en dur)
   */
  getAll(): Observable<Selfie[]> {
    return this._httpClient.get<ApiSelfiesResult>(environment.apis.selfies.url)
                           .pipe(
                             map(data => {
                              let array: Selfie[] = [];

                              array = data.result.map(selfieFromApi => {
                                const selfie = new Selfie();

                                selfie.id = 0;
                                selfie.titre = selfieFromApi.title;
                                selfie.wookie = new Wookie();

                                return selfie;
                              });

                              return array;
                             })
                           );
  }

  /**
   *Retourne un seul selfie avec son wookie
   *
   * @param {number} id
   * @returns {Observable<Selfie>}
   * @memberof SelfieService
   */
  getOne(id: number): Observable<Selfie> {
    return this._httpClient.get<Selfie>(environment.apis.selfies.url + '/' + id);
  }

  /**
   *  Ajouter d'un selfie : envoie des données en json vers l'api
   * et récupération du selfie ajouté
   * @param selfie
   */
  ajouter(selfie: Selfie): Observable<Selfie> {
    return this._httpClient.post<Selfie>(environment.apis.selfies.url, selfie);
  }
}
