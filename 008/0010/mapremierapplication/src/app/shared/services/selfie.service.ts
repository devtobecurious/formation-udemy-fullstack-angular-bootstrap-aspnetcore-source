import { Injectable } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor() { }

  /**
   * Retourne la liste complète des selfies à Wookies
   */
  getAll(): Selfie[] {
    return [
      { image: 'https://i.ytimg.com/vi/M1vQmU39uV8/maxresdefault.jpg', titre: 'Un super selfie !', wookie: { nom: 'Chewie', selfies: []} },
      { image: 'https://i.ytimg.com/vi/M1vQmU39uV8/maxresdefault.jpg', titre: 'Un selfie de ouf ! groaar !', wookie: { nom: 'Chewie 2',
        selfies: []} }
    ];
  }
}
