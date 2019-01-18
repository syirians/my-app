import { Component, OnInit,HostBinding } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LocalStorage } from 'ngx-store';
import { Configuration } from './global';
import { OverlayContainer} from '@angular/cdk/overlay';

declare const require;
declare const Modernizr;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  @LocalStorage() language = 'en';
  isOnline: boolean;
  events: string[] = [];
  opened: boolean;
  showFiller = false;
  show = false;
  kategori=Configuration.apiKey();
  onShow() { this.show = true; }
  folders: any[] = ["home","arts", "automobiles", "books", "business", "fashion", "food", "health", "insider", "magazine", "movies", "national", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "tmagazine", "travel", "upshot", "world"];
  @HostBinding('class') componentCssClass;
  constructor(
    private title: Title,
    private meta: Meta,
    private snackBar: MatSnackBar,
    private router: Router,
    public overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.opened = true;
    this.title.setTitle('My App');
    let local = localStorage.getItem('theme');
    this.onSetTheme(local);
    if(!local){
      this.onSetTheme('default-theme');
    }
  }
  
  cek(event){
    localStorage.setItem('kategori', event);
    this.router.navigate(['per-kategori']);
  }

  onSetTheme(theme) {
    localStorage.setItem('theme', theme);
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
