import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>
      Hello {{ name }}!
    </p>
  `,
  styles: []
})
export class InlineComponent implements OnInit {
  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

}
