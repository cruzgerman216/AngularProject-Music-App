import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { AlbumDetailComponent } from './music-list/album-detail/album-detail.component';
import { MusicEditComponent } from './music-list/music-edit/music-edit.component';
import { MusicListComponent } from './music-list/music-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: LandingPageComponent},
  {path: 'musiclist', component: MusicListComponent, children:[
    {path: 'new', component: MusicEditComponent}
  ]},
  {path: 'id', component: AlbumDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
