import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NodataPipe } from '../../pipes/nodata.pipe';
import { Products } from '../../models/product';
@Component({
  selector: 'app-product-detail',
  imports: [RouterLink, CommonModule, NodataPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product!: Products; // buat detail produk
  id!:number; // params dari url
  constructor(private productService: ProductService, private router: Router, private title: Title,private route:ActivatedRoute) { }

  ngOnInit(): void { // pakai snapshot karena id nya ga berubah selama komponen belum ditutup. ambil satu kali saja nilai params dari url saat komponen pertama kali dibuat. ng on init akan dipanggil ulang  
    this.route.paramMap.subscribe(params=> {
      this.id = Number(params.get('id'))
      this.getProduct(this.id)
    })
  }

  getProduct(id:number){
    this.productService.getById(id).subscribe(res=> {
      this.product= res
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
