import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/compiler';
import uuid from 'uuid/v4';
import { of } from 'rxjs';
import { ClockService } from '../clock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _clicked = 0;
  private _id = uuid();

  version = VERSION.full;
  myArray = of([
    'foo',
    'bar',
    'baz',
    'qux',
  ]);

  constructor(public clockService: ClockService) { }

  ngOnInit() {
    console.log(this.clockService.tick);
  }

  get clicked() {
    return this._clicked;
  }

  get id() {
    return this._id;
  }

  onClick() {
    this._clicked++;
    this._id = uuid();
  }

  isOdd(input: number): boolean {
    return input % 2 > 0;
  }

  onType(value: string) {
    this.version = value;
  }
}
