import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Manufacture } from 'src/app/model/manufacture';
import { ManufacturesService } from 'src/app/services/manufactures.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  manufacture: Manufacture = new Manufacture();

  constructor(private manufacturesService: ManufacturesService,
    private router: Router,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
  }

  createManufacture(){
    this.manufacturesService.createManufacture(this.manufacture).subscribe(data=>{
      console.log(data)
      this.redirectToList();
      this.toastr.success("Manufacture successfully created!")

    }, error=>{
      this.toastr.error("Error!"+ error.message)
    });
  }

  redirectToList(){
    this.router.navigate(['/listmanufactures'])
  }
}
