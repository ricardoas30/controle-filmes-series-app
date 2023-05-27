import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './layout/sobre/sobre.component';
import { CardComponent } from './layout/card/card.component';

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'home', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
