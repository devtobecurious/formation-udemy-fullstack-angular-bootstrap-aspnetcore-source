import { SelfieService } from './../../../shared/services/selfies/selfie.service';
import { LoggerService } from './../../../shared/services/logger/logger.service';
import { Component, OnInit, Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css'],
})
export class SelfieListComponent implements OnInit {
  public selfieAAjouter: Selfie = null;

  constructor(private _loggerService: LoggerService, private _selfieService: SelfieService) {
  }
  
  lesSelfies: Selfie[] = null;
  
  @Input()
  set filtre(valeur: string) {
    
  }
  
  ngOnInit() {
    this.lesSelfies = this._selfieService.getAll();
  }

  demandeAfficherPourAjoutSelfie(): void {
    this.selfieAAjouter = new Selfie();
    this.selfieAAjouter.titre = 'Test 01';
  }

  cacherZoneAjoutSelfie(): void {
    this.selfieAAjouter = null;
  }
}
