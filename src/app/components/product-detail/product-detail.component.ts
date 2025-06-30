import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute,RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NodataPipe } from '../../pipes/nodata.pipe';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink,CommonModule,NodataPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  product:any;
  constructor(private productService:ProductService, private route:ActivatedRoute, private title:Title){}

  ngOnInit(): void { // pakai snapshot karena id nya ga berubah selama komponen belum ditutup. ambil satu kali saja nilai params dari url saat komponen pertama kali dibuat. ng on init akan dipanggil ulang 
      const id = Number(this.route.snapshot.paramMap.get('id')) // buat ngambil id dari url terus dikirim ke parameter
      this.productService.getById(id).subscribe((res:any)=> {
        this.product = res
        this.title.setTitle(this.product.title)
      })
  }
}
