import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { LoggerService } from '../logger/logger.service';
import { Selfie } from './../../../models/selfie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    return this._httpClient.get<Selfie[]>(environment.apis.selfies.url);
  }
}
