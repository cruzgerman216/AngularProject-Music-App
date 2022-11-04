import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";

import { MusicListService } from "../music-list/music-list.service";
import { Album } from "./album.model";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(private http: HttpClient, private mlService: MusicListService){}

  storeAlbum(){
    const albums = this.mlService.getAlbums();
    this.http.put('https://music-bookmark-5b727-default-rtdb.firebaseio.com/albums.json', albums).subscribe(response => {
      console.log(response);
    });
  }

  fetchAlbum(){
   return this.http.get<Album[]>('https://music-bookmark-5b727-default-rtdb.firebaseio.com/').pipe(
      map(albums => {
        return albums.map( album => {
          return {...album, trackList: album.trackList ? album.trackList : []
          }
        });
      }),
      tap(albums => {
        this.mlService.setAlbums(albums);
      })
    )
  }
}
