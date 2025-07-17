import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductReviews } from '../../models/product';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{
constructor(private route:ActivatedRoute, private productService:ProductService){}
productId!:number; // nyimpan id dari url
reviews:ProductReviews[]=[]


ngOnInit(): void {
    this.route.paramMap.subscribe(params=> { //ambil id (params) dari url 
      const id = Number(params.get('id'))
      this.productId = id // ngisi variabel id (params) yang dapat dari url 

      this.productService.getReviewsByProductId(this.productId).subscribe((res:any)=> {
        this.reviews = res.reviews|| [] // kalau gada reviews, kasih array kosong biar kaga error
      })
    })
}
}
