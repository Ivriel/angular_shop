import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/product';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  imports: [RouterLink,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService:ProductService,private title:Title){
    this.title.setTitle('Product Page')
  }
  products:Products[] = []
  ngOnInit(): void {
      this.productService.getProducts().subscribe((res:any)=> {
        this.products = res.products
        console.log(this.products)
      })
  }
}
