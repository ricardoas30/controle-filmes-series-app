import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header_old/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
