import {Component, Input, OnInit, Output} from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() errorMessage: String;

  constructor() { }

  ngOnInit(): void {
  }

}
