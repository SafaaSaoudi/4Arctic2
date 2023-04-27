import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  id!:number;
text!:string;
  constructor(private actR: ActivatedRoute){}

ngOnInit(): void {
  //this.id=this.actR.snapshot.params['param'];
  this.actR.paramMap.subscribe(data=>this.id=Number(data.get('param')));
  this.actR.queryParams.subscribe(data=>this.text=data['title']);
}
}

