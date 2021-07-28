import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/model/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = new Category();

  

  constructor(
    private categoryService: CategoriesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }


  createCategory(){
    this.categoryService.createCategory(this.category).subscribe(data=>{
      console.log(data)
      this.redirectToList();
      this.toastr.success("Category successfully created!")

    }, error=>{
      this.toastr.error("Error!"+ error.message)
    });
  }

  redirectToList(){
    this.router.navigate(['/listcategories'])
  }



}
