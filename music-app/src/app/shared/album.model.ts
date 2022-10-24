import { Tracklist } from "./trackList.model";


export class Album{

  public artist: string;
  public title: string;
  public coverArt: string;
  public genre: string;
  public releaseYear: number;
  public trackList?: Tracklist[];

  constructor(
    artist: string,
    title: string,
    coverArt: string,
    genre: string,
    releaseYear: number,
    trackList?: Tracklist[]){
      this.artist = artist;
      this.title = title;
      this.coverArt = coverArt;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.trackList = trackList;
    }
}
