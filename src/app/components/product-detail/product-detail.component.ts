import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NodataPipe } from '../../pipes/nodata.pipe';
import { Products } from '../../models/product';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CommonModule, NodataPipe,ReviewsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Products; // buat detail produk
  id!:number; // params dari url
  maxId!:number;
  constructor(private productService: ProductService, private router: Router, private title: Title,private route:ActivatedRoute) { }

  ngOnInit(): void { 

    this.productService.getProducts().subscribe((res:any)=> {
      this.maxId = res.total
    })

    this.route.paramMap.subscribe(params=> {
      this.id = Number(params.get('id'))
      this.getProduct(this.id)
    })
  }

  getProduct(id:number){
    this.productService.getById(id).subscribe({
      next:(res:any)=> {
        this.product = res
        this.title.setTitle(`Product - ${this.product.title}`)
      },
      error:(err)=> {
        this.router.navigate(['/notfound'])
      }
    })
  }

  nextProduct(){
    const nextId = this.id + 1
    this.router.navigate(['/products',nextId])
  }

  previousProduct(){
    const prevId = this.id -1
    if(prevId > 0){
      this.router.navigate(['/products',prevId])
    }
  }
}
