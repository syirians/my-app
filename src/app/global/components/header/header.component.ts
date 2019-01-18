import { Component, Inject, OnInit, Input, Output, EventEmitter,HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() show = new EventEmitter<boolean>();
  @Output() color = new EventEmitter<boolean>();
  appConfig: any;
  menuItems: any[];
  progressBarMode: string;
  currentLang: string;
  @HostBinding('class') componentCssClass;

  constructor(
    private router: Router,
    public overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    this.loadMenus();
  
  }

  changeLanguage(language: string): void {
    
  }

  private loadMenus(): void {
    this.menuItems = [
      { link: '/', name: 'Home' },
    ];
  }

  onShow() {
    this.show.emit(true);
    return true;
  }
  toHome(){
    this.router.navigate(['']);
  }
  onSetTheme(theme) {
    this.color.emit(theme);
  }
}
