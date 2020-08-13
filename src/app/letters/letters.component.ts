import { Component, OnInit, Input } from '@angular/core';
import * as data from '../../assets/images/letters/images.json';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  @Input() doUpperCase: string;
  public images: any = data.images;
  showImage = "1";
  blanda = 0;
  versaler = "1";
  foo: number = 0;
  aLetter = "a";

  letters = "abcdefghijklmnopqrstuvwxyzåäö";
  lettersArray: string [] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];

constructor() { }

  ngOnInit(): void {}

  getLetter(letter) { 
    if(this.versaler == "versaler") {
      return letter.toUpperCase();
    }
    else {
      return letter;
    }
  }

  getImage(letter) {
    return "/assets/images/letters/"+this.images[letter][0];
//    return "../../assets/images/letters/"+this.images[letter][Math.floor(Math.random()*this.images[letter].length)];
  }

  slumpaLista(letters: string []){
    let nylista: string [] = [];
    while(letters.length > 0) {
      let next = Math.floor(Math.random()*letters.length);
      let save = letters[next];
      letters.splice(next, 1);
      nylista.push(save);
    }
    this.lettersArray = nylista;
    return nylista;
  }

  getLetters(): string [] {
    let tmp: string[] = [];
    for(let i = 0; i < this.letters.length; i++) {
      tmp.push(this.letters[i]);
    }
    if(this.blanda === 1) {
      tmp = this.slumpaLista(tmp);
    }
    return tmp;
  }

  changedSlide(event): void {
    if(this.versaler === "1") {
      this.aLetter = this.lettersArray[event].toUpperCase();
    }
    else {
      this.aLetter = this.lettersArray[event];
    }
  }
}
