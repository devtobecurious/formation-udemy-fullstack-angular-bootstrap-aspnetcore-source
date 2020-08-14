import { SelfieService } from './../../../shared/services/selfies/selfie.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';

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

  constructor(private _selfieService: SelfieService) { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
      });
  }

  clickSurAjouter() {
    this._selfieService.ajouter(this.selfieARenseigner)
                       .subscribe(item => this.selfieARenseigner = item);

    // TODO: Informer le parent 
  }

  clickSuAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }

  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
