import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
  
  opened = true;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sidenavIsOpen = false;

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.sidenav.toggle().then((res: any) => {
      this.sidenavIsOpen = res;
    })
  }

}
