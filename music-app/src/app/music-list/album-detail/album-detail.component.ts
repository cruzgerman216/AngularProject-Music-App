import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/shared/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
