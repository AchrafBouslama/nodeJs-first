import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/category.service';

@Component({
  selector: 'app-update-categories',
  templateUrl: './update-categories.component.html',
  styleUrls: ['./update-categories.component.css']
})
export class UpdateCategoriesComponent {
  constructor(private categoryService: CategoryService,private router:ActivatedRoute,private route:Router) { }
  categoryId:any;
  ngOnInit() {

    this.router.params.subscribe(
      (params: Params) => {
        this.categoryId = params['categoryId'];
        console.log(params['categoryId']);
      }
    )


  
}

updateClass(name:string,type:string,qualite:string)
{
  this.categoryService.updateCategory(
    this.categoryId,name,type,qualite
  ).subscribe(
(rep)=>{
  console.log(rep);
  this.route.navigate(['/'])
}

  )

}
}
