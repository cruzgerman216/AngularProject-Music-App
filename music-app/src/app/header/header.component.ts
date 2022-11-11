import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/auth/auth.service'
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn: boolean = false;

  constructor( private authService: AuthService, private dataStorageService: DataStorageService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.isLoggedIn = !!user;
    });
  }

  onSend(){
    this.dataStorageService.storeAlbum();
  }

  onRetrieve(){
    this.dataStorageService.fetchAlbum().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
