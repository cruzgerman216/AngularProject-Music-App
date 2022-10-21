import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicListComponent } from './music-list/music-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MusicEditComponent } from './music-list/music-edit/music-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicListComponent,
    LandingPageComponent,
    MusicEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
