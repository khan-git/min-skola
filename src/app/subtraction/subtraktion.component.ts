import { Component, OnInit } from '@angular/core';
import { Options, ChangeContext } from 'ng5-slider';

@Component({
  selector: 'app-subtraktion',
  templateUrl: './subtraktion.component.html',
  styleUrls: ['./subtraktion.component.css']
})
export class SubtraktionComponent implements OnInit {

  resultat = {
    correct: 0,
    tries: 0
  };

  showSuccess = false;
  showFailed = false;
  tal1: number;
  tal2: number;
  differans: number;
  correct: number;
  tries: number;
  svar: string;
  maxtal = 10;
  slideoptions: Options = {
    floor: 1,
    ceil: 10000,
    logScale: true,
    showTicks: true
  };

  constructor() {}

  ngOnInit(): void {
    this.correct = 0;
    this.tries = 0;
    this.svar = '';
    this.laddaData();
    this.getNextTal();
  }

  nollaData() {
    this.correct = 0;
    this.tries = 0;
    this.sparaData();
  }

  onAddValueToResult(value: string) {
    this.svar = this.svar + value;
  }
  
  onRemoveLastValue(event: Boolean) {
    this.svar = this.svar.slice(0, -1);
  }

  onCheckResult(event: Boolean) {
    if( parseInt(this.svar) == this.differans ) {
      this.correct += 1;
      this.tries += 1;
      this.showSuccess = true;
    }
    else {
      this.tries += 1;
      this.showFailed = true;
      this.svar = "";
      setInterval(() => {
        this.showFailed = false;
      }, 1000);
    }
    this.sparaData();
  }

  doNext() {
    this.showSuccess = false;
    this.getNextTal();
  }

  getNextTal() {
    console.log(this.maxtal);
    this.svar = "";
    this.tal1 = Math.floor(Math.random()*this.maxtal+1);
    this.tal2 = Math.floor(Math.random()*this.tal1+1);
    this.differans = this.tal1-this.tal2;
  }

  rangeChanged(changecontext: ChangeContext) {
    this.maxtal = changecontext.value;
    this.sparaData();
  }

  laddaData() {
    const data = localStorage.getItem('subtraktiondata');
    if ( data != null) {
      var tmp = JSON.parse(data);
      this.correct = tmp.correct;
      this.tries = tmp.tries;
      this.maxtal = tmp.maxtal;
    }
  }

  sparaData() {
    localStorage.setItem('subtraktiondata', 
    JSON.stringify({
      'correct': this.correct,
      'tries': this.tries,
      'maxtal': this.maxtal
    }));
  }
}
