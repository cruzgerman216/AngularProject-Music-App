import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { Album } from '../shared/album.model';
import { MusicListService } from './music-list.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  subscription: Subscription;

  constructor(
    private musicListService: MusicListService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription = this.musicListService.albumChanged.subscribe(
      (albums: Album[]) => {
        this.albums = albums;
      }
    );
    this.albums = this.musicListService.getAlbums();
  }

  onNewAlbum(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
