import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionComponent }  from './addition/addition.component';
import { SubtraktionComponent }  from './subtraction/subtraktion.component';
import { DivisionComponent }  from './division/division.component';
import { MultiplikationComponent }  from './multiplikation/multiplikation.component';
import { LettersComponent } from './letters/letters.component';
import { WordsComponent } from './words/words.component';
import { NonsensComponent } from './nonsens/nonsens.component';

const routes: Routes = [
  { path: 'alfabetet', component: LettersComponent},
  { path: 'vanligaord', component: WordsComponent},
  { path: 'nonsens', component: NonsensComponent},
  { path: 'addition', component: AdditionComponent},
  { path: 'subtraktion', component: SubtraktionComponent},
  { path: 'multiplikation', component: MultiplikationComponent},
  { path: 'division', component: DivisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
