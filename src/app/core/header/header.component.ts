import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatSidenavModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  isMobile: boolean;

  constructor(
    public util: UtilService
  ) { }

  ngOnInit() {
    this.isMobile = this.util.isMobile();
  }

  /**logo click listner */
  onLogoClick(event: any) {

  }
}
