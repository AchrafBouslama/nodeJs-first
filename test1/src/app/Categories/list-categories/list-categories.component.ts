import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Category } from 'src/app/model/Category/category.model';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {

 category:Category=new Category();
 id: any;
 categories: any;
 editquiz:Category=new Category();
 constructor(private categoryService: CategoryService,private router:ActivatedRoute) { }
 ngOnInit() {
   this.reloadData();
   this.router.params.subscribe(
    (params: Params) => {
      this.id = params['id'];
      console.log(params['id']);
    }
  )
 }
 reloadData() {
  this.categoryService.getCategory().subscribe(data => {
    if (data) {
      this.categories=data
      console.log(this.categories);
    }
  });
}


public editeCategory(category:Category){
  this.category={...category};
  this.id=category._id;
}


public addOrEditeCategory(category:Category){
  console.log("cattttttt",category);
  if(!this.id){
    this.categoryService.createCategory(category).subscribe({
      next: response => this.reloadData(),
      error: error => console.log(error),
      complete: () =>  this.category=new Category(),
    });
  }else{
    //this.category._id=this.id;
    /*this.categoryService.updateCategory(this.id, this.category) .subscribe({
      next: data => {
        console.log(data);
        this.category = new Category();
      },
      error: error => console.log(error)
    });*/
}



}









}
