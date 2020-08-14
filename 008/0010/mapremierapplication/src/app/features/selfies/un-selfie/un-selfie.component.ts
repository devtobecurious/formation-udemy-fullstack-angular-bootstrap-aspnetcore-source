import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from 'src/app/shared/services/logger/logger.service';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Selfie } from 'src/app/models/selfie';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';

@Component({
  selector: 'app-un-selfie',
  templateUrl: './un-selfie.component.html',
  styleUrls: ['./un-selfie.component.css']
})
export class UnSelfieComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public _leSelfie: Selfie = null;

  constructor(private _logger: LoggerService, private _route: ActivatedRoute, private _selfieService: SelfieService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    // const subscription = this._route.params.subscribe(params => {
    //   const selfieId = params.id;
    //   this._selfieService.getOne(selfieId).subscribe(selfie => this._leSelfie = selfie);
    // });

    const subscription = this._route.params.pipe( 
      switchMap(params => {
        const selfieId = params.id;
        return this._selfieService.getOne(selfieId);
      })
      ).subscribe(item => this._leSelfie = item);

    this.subscriptions.push(subscription);
  }

}
