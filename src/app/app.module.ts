import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SobreComponent } from './layout/sobre/sobre.component';
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { CardComponent } from './layout/card/card.component';
import { SobreItemComponent } from './layout/sobre-item/sobre-item.component';
import { CardDetailComponent } from './layout/card-detail/card-detail.component';
import { CardCadastroComponent } from './layout/card-cadastro/card-cadastro.component';
import {NgPipesModule} from 'ngx-pipes';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { LoginComponent } from './layout/login/login.component';
import { NotAuthorizedComponent } from './layout/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    SobreComponent,
    MenuLateralComponent,
    CardComponent,
    SobreItemComponent,
    CardDetailComponent,
    CardCadastroComponent,
    NotFoundComponent,
    LoginComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgPipesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
