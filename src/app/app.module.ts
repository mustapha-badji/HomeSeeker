import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AjouterAppartementComponent } from './ajouter-appartement/ajouter-appartement.component';
import { ListeAppartementComponent } from './liste-appartement/liste-appartement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AjouterAppartementComponent,
    ListeAppartementComponent,
    AccueilComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
