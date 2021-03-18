import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Početna',  icon: 'dashboard', class: '' },
    { path: '/artikli', title: 'Artikli',  icon:'filter_none', class: '' },
    { path: '/partneri', title: 'Partneri',  icon:'contacts', class: '' },
    { path: '/korisnici', title: 'Korisnici',  icon:'people', class: '' }, 
    { path: '/vrste-racuna', title: 'Vrste računa',  icon:'content_paste', class: '' },
    { path: '/racuni', title: 'Računi',  icon:'library_books', class: '' },  
    { path: 'logout', title: 'Odjava',  icon:'logout', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  user:string;


  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.user = sessionStorage.getItem('username')
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
