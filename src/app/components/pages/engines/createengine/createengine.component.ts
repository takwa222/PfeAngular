
/*import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/model/brand';
import { Engine } from 'src/app/model/engine';
import { Model } from 'src/app/model/model';
import { Submodel } from 'src/app/model/submodel';
import { BrandService } from 'src/app/services/brand.service';
import { ModelsService } from 'src/app/services/models.service';
import { SubmodelsService } from 'src/app/services/submodels.service';

@Component({
  selector: 'app-createengine',
  templateUrl: './createengine.component.html',
  styleUrls: ['./createengine.component.css']
})
export class CreateengineComponent implements OnInit {

  engine: Engine = new Engine();
  brands!: Brand[];
  models!: Model[];
  submodels!: Submodel[];
  brandSelected!: number;
  modelSelected!: number;
  submodelSelected!: number;
  brand!: Brand;
  model!: Model;
  submodel!: Submodel;

  constructor(
    private engineService: EnginesService,
    private brandsService: BrandService,
    private modelsService: ModelsService,
    private submodelsService: SubmodelsService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getBrands();
    this.getModels();
    this.getSubModels();


  }


  createEngine() {

    this.engine.brand = this.brand
    this.engine.model= this.model
    this.engine.category = this.category

    console.log(this.engine)

    this.engineService.createSubCategory(this.engine).subscribe(data => {

      this.engine = data;

      console.log(this.engine)

      this.redirectToList();
      this.toastr.success("engine successfully created!")
    },
/*/
