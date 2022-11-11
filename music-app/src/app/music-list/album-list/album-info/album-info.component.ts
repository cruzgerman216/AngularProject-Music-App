import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Album } from 'src/app/shared/album.model';
import { MusicListService } from '../../music-list.service';

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.css']
})
export class AlbumInfoComponent implements OnInit {
  @Input() album: Album;
  @Input() id:number;

  constructor(private musicListService: MusicListService, private route: ActivatedRoute, private router: Router) { }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDelete(){
    this.musicListService.deleteAlbum(this.id);
    this.router.navigate(['/musiclist']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.album = this.musicListService.getAlbum(this.id);
      }
    );
  }

}
