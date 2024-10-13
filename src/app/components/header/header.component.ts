import {Component, inject, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor() {}

  categories: string[] = [];
  dataService = inject(DataService);

  ngOnInit() {
    this.dataService.getCategories().subscribe((v) => {
      this.categories = v;
      console.log(v)
    })
  }
}
