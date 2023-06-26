import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './layout/sobre/sobre.component';
import { CardComponent } from './layout/card/card.component';
import { CardDetailComponent } from './layout/card-detail/card-detail.component';
import { CardCadastroComponent } from './layout/card-cadastro/card-cadastro.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthenticationGuard } from './utility/authentication.guard';
import { NotAuthorizedComponent } from './layout/not-authorized/not-authorized.component';
import { LoginComponent } from './layout/login/login.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'sobre', component: SobreComponent, canActivate: [AuthenticationGuard]},
  {path: 'home', component: CardComponent, canActivate: [AuthenticationGuard]},
  {path: 'cadastro', component: CardCadastroComponent, canActivate: [AuthenticationGuard]},
  {path: 'filme/:id', component: CardDetailComponent, canActivate: [AuthenticationGuard]},
  {path: 'delete/:id', component: CardComponent, canActivate: [AuthenticationGuard]},
  {path: 'nao-autorizado', component: NotAuthorizedComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthenticationGuard]
})
export class AppRoutingModule { }
