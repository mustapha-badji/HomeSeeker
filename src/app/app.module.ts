import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { AjouterAppartementComponent } from './ajouter-appartement/ajouter-appartement.component';
import { ListeAppartementComponent } from './liste-appartement/liste-appartement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CapturePhotoComponent } from './capture-photo/capture-photo.component';

const appRoutes: Routes = [
  { path: 'Accueil', component: AccueilComponent },
  { path: 'Appartement', component: AjouterAppartementComponent },
  { path: 'Appartements', component: ListeAppartementComponent},
  { path: 'Capturer', component: CapturePhotoComponent}
];  


@NgModule({
  declarations: [
    AppComponent,
    AjouterAppartementComponent,
    ListeAppartementComponent,
    AccueilComponent,
    NavigationBarComponent,
    CapturePhotoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }), // <-- debugging purposes only
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
