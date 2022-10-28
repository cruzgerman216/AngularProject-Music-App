import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlbumInfoComponent } from './music-list/album-list/album-info/album-info.component';
import { MusicEditComponent } from './music-list/music-edit/music-edit.component';
import { MusicListComponent } from './music-list/music-list.component';
import { AuthComponent } from './shared/auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'musiclist', component: MusicListComponent, children:[
    {path: 'new', component: MusicEditComponent},
    {path: ':id', component: AlbumInfoComponent},
    {path: ':id/edit', component: MusicEditComponent},
  ]},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
