import { Component, OnInit } from '@angular/core';
import { Options, ChangeContext } from 'ng5-slider';


@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  resultat = {
    correct: 0,
    tries: 0
  };

  showSuccess = false;
  showFailed = false;
  tal1: number;
  tal2: number;
  summa: number;
  correct: number;
  tries: number;
  svar: string;
  maxtal: number;
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
    this.maxtal = 10;
    this.svar = '&#160;&#160;.';
    this.laddaData();
    this.getNextTal();
  }

  onAddValueToResult(value: string) {
    this.svar = this.svar + value;
  }
  
  onRemoveLastValue(event: Boolean) {
    this.svar = this.svar.slice(0, -1);
  }

  nollaData() {
    this.correct = 0;
    this.tries = 0;
    this.sparaData();
  }

  onCheckResult(event: Boolean) {
    if( parseInt(this.svar) === this.summa ) {
      this.correct += 1;
      this.tries += 1;
      this.showSuccess = true;
    }
    else {
      this.tries += 1;
      this.showFailed = true;
      this.svar = '';
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
    this.svar = '';
    this.tal1 = Math.floor(Math.random()*this.maxtal+1);
    this.tal2 = Math.floor(Math.random()*this.maxtal+1);
    this.summa = this.tal1+this.tal2;
  }

  rangeChanged(changecontext: ChangeContext) {
    this.maxtal = changecontext.value;
    this.sparaData();
  }

  laddaData() {
    const data = localStorage.getItem('additiondata');
    if ( data != null) {
      var tmp = JSON.parse(data);
      this.correct = tmp.correct;
      this.tries = tmp.tries;
      this.maxtal = tmp.maxtal;
    }
  }

  sparaData() {
    localStorage.setItem('additiondata', 
      JSON.stringify({
        'correct': this.correct,
        'tries': this.tries,
        'maxtal': this.maxtal
      })
    );
  }

}
