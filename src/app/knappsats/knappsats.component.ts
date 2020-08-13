import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-knappsats',
  templateUrl: './knappsats.component.html',
  styleUrls: ['./knappsats.component.css']
})
export class KnappsatsComponent implements OnInit {
  @Output() doneEvent = new EventEmitter<boolean>();
  @Output() removeLastEvent = new EventEmitter<boolean>();
  @Output() keyEnteredEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  keyDown(value: string) {
    this.keyEnteredEvent.emit(value);
  }

  removeLast() {
    this.removeLastEvent.emit(true);
  }

  done() {
    this.doneEvent.emit(true);
  }

}
