import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/product';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Categories } from '../../models/category';

@Component({
  selector: 'app-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService, private title: Title, private route: ActivatedRoute) {
    this.title.setTitle('Product Page')
  }
  products: Products[] = []
  categories: Categories[] = []

  ngOnInit(): void {
 
    // pakai subscribe langsung karena komponen products komponen tidak dihancurkan saat ganti route kategori. cuma update parameter dan bukan reload component. ng on init tidak dipanggil ulang maka butuh subscribe langsung buat detec params
    this.route.paramMap.subscribe(params => {
      // get semua kategori dulu dari API
      this.productService.getCategories().subscribe((res:Categories[])=> {
        this.categories = res
        console.log(this.categories)
      })

      const category = params.get('category') // ambil nama category dari url

      if (category) {
        // kalau ada parameter  kategori di url,fetch berdasarkan parameter kategori
        this.productService.getByCategory(category).subscribe((res: any) => {
          this.products = res.products
        })
      } else {
        this.productService.getProducts().subscribe((res: any) => {
          this.products = res.products
          console.log(this.products)
        })
      }
    })

  }
}
