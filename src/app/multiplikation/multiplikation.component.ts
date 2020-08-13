import { Component, OnInit } from '@angular/core';
import { Options, ChangeContext } from 'ng5-slider';

@Component({
  selector: 'app-multiplikation',
  templateUrl: './multiplikation.component.html',
  styleUrls: ['./multiplikation.component.css']
})
export class MultiplikationComponent implements OnInit {

  resultat = {
    correct: 0,
    tries: 0
  }

  showSuccess: boolean = false;
  showFailed: boolean = false;
  tal1: number;
  tal2: number;
  produkt: number;
  correct: number;
  tries: number;
  svar: string;
  maxtal: number;
  slideoptions: Options = {
    floor: 1,
    ceil: 20,
    showTicks: true
  };


  constructor() {}

  ngOnInit(): void {
    this.correct = 0;
    this.tries = 0;
    this.svar = "";
    this.maxtal = 10;
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
    if( parseInt(this.svar) == this.produkt ) {
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
    this.svar = "";
    this.tal1 = Math.floor(Math.random()*this.maxtal+1);
    this.tal2 = Math.floor(Math.random()*this.maxtal+1);
    this.produkt = this.tal1*this.tal2;
  }

  rangeChanged(changecontext: ChangeContext) {
    this.maxtal = changecontext.value;
    this.sparaData();
  }

  laddaData() {
    const data = localStorage.getItem('multiplikationdata');
    if ( data != null) {
      var tmp = JSON.parse(data);
      this.correct = tmp.correct;
      this.tries = tmp.tries;
      this.maxtal = tmp.maxtal;
    }
  }

  sparaData() {
    localStorage.setItem('multiplikationdata', 
      JSON.stringify({
        'correct': this.correct,
        'tries': this.tries,
        'maxtal': this.maxtal
      })
    );
  }

}
