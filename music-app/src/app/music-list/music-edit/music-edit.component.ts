import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.css']
})
export class MusicEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(albumEditForm: NgForm){
    
  }
}
