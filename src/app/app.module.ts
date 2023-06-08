import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header_old/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SobreComponent } from './layout/sobre/sobre.component';
import { MenuLateralComponent } from './layout/menu-lateral/menu-lateral.component';
import { CardComponent } from './layout/card/card.component';
import { SobreItemComponent } from './sobre-item/sobre-item.component';
import { CardDetailComponent } from './layout/card-detail/card-detail.component';
import { CardCadastroComponent } from './layout/card-cadastro/card-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    MenuComponent,
    SobreComponent,
    MenuLateralComponent,
    CardComponent,
    SobreItemComponent,
    CardDetailComponent,
    CardCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
