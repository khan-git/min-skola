import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nonsens',
  templateUrl: './nonsens.component.html',
  styleUrls: ['./nonsens.component.css']
})
export class NonsensComponent implements OnInit {

  constructor() { }
  antalMeningar: number = 0;
  antalOrd: number = 0;

  part1: string[] = ["En kanin", "Pappa", "Fem smurfar", "Tomten", "En drake", "Sju dvärgar", "En blå häst", "Tio trevliga tranor", "Många missar", "Mamma", "Sju hamstrar", "Ett marsvin", "En mormor", "En Gran", "En morfar", "Få fåglar"];
  part2: string[] = ["skuttar", "ramlar", "smyger", "går", "rullar", "halkar", "glider", "dansar", "hasar", "vrålar", "springer", "sminkar", "målar", "slipar", "bubblar", "trummar", "spelar", "sjunger", "trollar", "övar", "bugar", "skakar rumpa"];
  part3: string[] = ["bakom", "framför", "vid sidan av ", "mellan", "på", "under", "till höger om", "till vänster om", "inuti", "genom", "ovanpå", "runt om"];
  part4: string[] = ["en skattkista", "ett skeppsvrak", "en buss", "en bil", "en brygga", "en båt", "en cykel", "ett par rullskridskor", "ett par skridskor", "en vagn", "ett rymdskepp", "ett hål", "en grop", "sju hus", "ett par pjäxor", "två undulater", "fem fällor"];

  nonsens: string;

  ngOnInit(): void {
    let data = localStorage.getItem('nonsens');
    if( data != null ) {
      let tmp = JSON.parse(data);
      console.log(tmp);
      this.antalMeningar = tmp.antalmeningar;
      this.antalOrd = tmp.antalord;
    }
    this.nonsens = this.getNonsens();
    
  }

  setNonsens() {
    localStorage.setItem('nonsens', JSON.stringify({'antalmeningar': this.antalMeningar, 'antalord': this.antalOrd}));
    this.nonsens = this.getNonsens();
  }

  getNonsens() {
    var nonsens = this.part1[Math.floor(Math.random()*this.part1.length)]+" "
    +this.part2[Math.floor(Math.random()*this.part2.length)]+" "
    +this.part3[Math.floor(Math.random()*this.part3.length)]+" "
    +this.part4[Math.floor(Math.random()*this.part4.length)]+".";
    this.antalMeningar += 1;
    this.antalOrd += nonsens.split(' ').length;
    return nonsens;
  }

  nollaData() {
    localStorage.setItem('nonsens', JSON.stringify({'antalmeningar': 0, 'antalord': 0}));
    this.antalMeningar = 1;
    this.antalOrd = 0;
    this.antalOrd += this.nonsens.split(' ').length;
  }

}
