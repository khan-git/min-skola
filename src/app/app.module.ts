import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdditionComponent } from './addition/addition.component';
import { SubtraktionComponent } from './subtraction/subtraktion.component';
import { MultiplikationComponent } from './multiplikation/multiplikation.component';
import { DivisionComponent } from './division/division.component';
import { KnappsatsComponent } from './knappsats/knappsats.component';
import { LettersComponent } from './letters/letters.component';
import { NonsensComponent } from './nonsens/nonsens.component';
import { WordsComponent } from './words/words.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule }  from 'ngx-bootstrap/progressbar';
import { RemoveSpacePipe } from './removespace.pipe';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    LettersComponent,
    NonsensComponent,
    WordsComponent,
    AdditionComponent,
    SubtraktionComponent,
    MultiplikationComponent,
    DivisionComponent,
    KnappsatsComponent,
    RemoveSpacePipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
