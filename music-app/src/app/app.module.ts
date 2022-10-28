import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicListComponent } from './music-list/music-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MusicEditComponent } from './music-list/music-edit/music-edit.component';
import { AlbumDetailComponent } from './music-list/album-list/album-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlbumInfoComponent } from './music-list/album-list/album-info/album-info.component';
import { AuthComponent } from './shared/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicListComponent,
    LandingPageComponent,
    MusicEditComponent,
    AlbumDetailComponent,
    AlbumInfoComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
