import { Album } from "../shared/album.model";
import { Tracklist } from "../shared/trackList.model";

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
    ])
  ]
}
