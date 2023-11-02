import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ThemeService} from "../../service/theme.service";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenuBarComponent implements OnInit {

  public items!: MenuItem[];
  public avatarImage!: string;
  public themeIcon: string = 'pi pi-moon';
  public animateIcon: boolean = false;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.loadAvatarImage();

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/home'
      },
      {
        label: 'Quem sou eu',
        icon: 'pi pi-info',
        routerLink: '/about'
      },
      {
        label: 'Contato',
        icon: 'pi pi-phone',
        routerLink: '/contact'
      }
    ];
  }

  showAvatarIcon(): void {
    this.avatarImage = '';
  }

  showAvatarImage(): boolean {
    return this.avatarImage.length > 0;
  }

  changeTheme(): void {
    this.themeService.switchTheme(this.isThemeDark() ? 'md-dark-indigo' : 'md-light-indigo');
    this.changeIcon();
  }

  changeIcon(): void {
    this.animateIcon = !this.animateIcon;
    this.themeIcon = this.isThemeDark() ? 'pi pi-sun' : 'pi pi-moon';
  }

  isThemeDark(): boolean {
    return this.themeIcon === 'pi pi-moon';
  }

  private loadAvatarImage(): void {
    this.avatarImage = 'assets/img/avatar.png';
  }

}
