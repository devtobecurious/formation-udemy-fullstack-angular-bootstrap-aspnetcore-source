import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-strict',
  templateUrl: './test-strict.component.html',
  styleUrls: ['./test-strict.component.css']
})
export class TestStrictComponent implements OnInit {
  list !: string[];

  compteur !: number;;

  constructor() {
  }

  ngOnInit(): void {

  }

}
