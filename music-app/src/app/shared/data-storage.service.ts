import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { MusicListService } from "../music-list/music-list.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
  constructor(private http: HttpClient, private mlService: MusicListService){}
}
