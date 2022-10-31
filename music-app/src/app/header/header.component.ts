import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../shared/auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isLoggedIn: boolean = false;

  constructor( private authService: AuthService ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe( user => {
      this.isLoggedIn = !!user;
    });
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
