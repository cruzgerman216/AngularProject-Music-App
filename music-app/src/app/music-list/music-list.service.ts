import { Injectable } from "@angular/core";
import { Album } from "../shared/album.model";
import { Tracklist } from "../shared/trackList.model";

@Injectable({
  providedIn: 'root'
})
export class MusicListService{
  private album: Album[] = [
    new Album('MGMT', 'Time to Pretend', 'https://upload.wikimedia.org/wikipedia/en/a/aa/MGMT_-_Time_to_Pretend_EP.png',
    'Synthpop', 2005, [
      new Tracklist(1, 'Time to Pretend'),
      new Tracklist(2, 'Boogie Down'),
      new Tracklist(3, 'Detrokk'),
      new Tracklist(4, 'Love Always Remains'),
      new Tracklist(5, 'Indie Rokkers'),
      new Tracklist(6, 'Kids'),
    ]),
    new Album("Santigold", "I Don't Want: The Gold Fire Sessions", 'https://th.bing.com/th/id/OIP.lVQJ2yeK2i50hMQYSFCDPQHaHa?w=204&h=204&c=7&r=0&o=5&pid=1.7', "Dancehall", 2018, [
      new Tracklist(1, "Coo Coo Coo"),
    ])
  ]

  getAlbums(){
    return this.album.slice();
  }
}
