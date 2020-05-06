import { Component, OnInit, Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SelfieService } from 'src/app/shared/services/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css'],
})
export class SelfieListComponent implements OnInit {
  // logger = new LoggerService();
  monLogger: LoggerService;

  constructor(logger: LoggerService, private selfieService: SelfieService) {
    this.monLogger = logger;

  }
  
  lesSelfies: Selfie[] = null;
  
  @Input()
  set filtre(valeur: string) {
    this.monLogger.log('SelfieListComponent', valeur);
  }
  
  ngOnInit() {
    this.lesSelfies = this.selfieService.getAll();
  }
}
