import { Component } from '@angular/core';
import { Produit } from 'src/app/model/Produit/produit.model';
import { ProduitService } from 'src/app/shared/produit.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent {
  produit:Produit=new Produit();
  _id: any;
  produits: any;
  editquiz:Produit=new Produit();
  categories!: any;
  constructor(private produitService: ProduitService) { }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
   this.produitService.getProduit().subscribe(data => {
     if (data) {
       this.produits=data
       console.log(this.produits);
     }
   });
 }


 public editeProduit(produit:Produit){
  this.produit={...produit};
  this._id=produit._id;
}


public addOrEditeCategory(produit:Produit){
  console.log("cattttttt",produit);
  if(!this._id){
    this.produitService.createProduit(produit).subscribe({
      next: response => this.reloadData(),
      error: error => console.log(error),
      complete: () =>  this.produit=new Produit(),
    });
  }else{
    this.produit._id=this._id;
    this.produitService.updateCategory(this._id, this.produit) .subscribe({
      next: data => {
        console.log(data);
        this.produit = new Produit();
      },
      error: error => console.log(error)
    });
}



}

}
