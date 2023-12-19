import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../core/product-list/product-list.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

}
