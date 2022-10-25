import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { Album } from '../shared/album.model';
import { MusicListService } from './music-list.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  albums: Album[] = [];
  constructor(
    private musicListService: MusicListService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.albums = this.musicListService.getAlbums();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
