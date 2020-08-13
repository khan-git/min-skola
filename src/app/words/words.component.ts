import { Component, OnInit } from '@angular/core';
import * as data from './words.json';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  words: any = data.words;

  versaler = "gemener";

  constructor() { }

  ngOnInit() {
  }

  getWord(word) { 
    if(this.versaler == "versaler") {
      return word.toUpperCase();
    }
    else {  
      return word;
    }
  }

}
