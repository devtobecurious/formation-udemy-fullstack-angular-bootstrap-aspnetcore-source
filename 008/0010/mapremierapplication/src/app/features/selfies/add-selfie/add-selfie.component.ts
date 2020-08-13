import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-add-selfie',
  templateUrl: './add-selfie.component.html',
  styleUrls: ['./add-selfie.component.css']
})
export class AddSelfieComponent implements OnInit {
  @Output()
  public annulerAjouter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selfieARenseigner: Selfie = null;

  constructor() { }

  ngOnInit(): void {
  }

  clickSurAjouter() {
    
  }

  clickSuAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }
}
