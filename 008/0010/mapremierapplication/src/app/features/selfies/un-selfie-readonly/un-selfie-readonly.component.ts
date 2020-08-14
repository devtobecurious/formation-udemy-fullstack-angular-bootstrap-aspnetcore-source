import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css']
})
export class UnSelfieReadonlyComponent implements OnInit {

  @Input()
  public unSelfie: Selfie = null;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  clickPourDuel() {
    this._router.navigate(['/duels/nouveau']);
  }

  clickPourConsultation() {
    // TODO: renseigner l'id dans notre api.
    this.unSelfie.id = 2;
    //ENDOFTODO
    this._router.navigate(['/selfies/consulter', this.unSelfie.id]);
  }
}
