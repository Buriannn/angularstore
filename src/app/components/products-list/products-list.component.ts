import { Component, inject, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { IProduct } from '../../interface/IProduct';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {
  
  private router = inject(Router);
  private activeRoute!:string;
  private dataService = inject(DataService);

  public productsList:IProduct[] = [];


  getProductByCategory() {
    this.dataService.getProductsByCategory(this.activeRoute).subscribe((v) => {
      this.productsList = v;
      // console.log(v);
    })
  }



  ngOnInit() {
    this.activeRoute = this.router.url.slice(1);
    this.getProductByCategory();
  }


}
