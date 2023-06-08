import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './layout/sobre/sobre.component';
import { CardComponent } from './layout/card/card.component';
import { CardDetailComponent } from './layout/card-detail/card-detail.component';
import { CardCadastroComponent } from './layout/card-cadastro/card-cadastro.component';

const routes: Routes = [
  
  {path: 'sobre', component: SobreComponent},
  {path: 'home', component: CardComponent},
  {path: 'cadastro', component: CardCadastroComponent},
  {path: 'filme/:id', component: CardDetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
