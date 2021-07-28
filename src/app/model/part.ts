import { Category } from "./category";
import { Engine } from "./engine";
import { Image } from "./image";
import { Manufacture } from "./manufacture";
import { Submodel } from "./submodel";

export class Part {
    id!: number;
    
    name!: string;
    
    description!: string;
    
    warranty!: string;
    
    material!: string;
    
    reference!: string;
    
    type!: string;
    
    colorFinish!: string;
    
    fits!: string;
    
    design!: string;
    
    notes!: string;
    
    position!: string;
    
    quantity!: number;
    
    buyPrice!: number;
    
    sellPrice!: number;
    
    tva!: number;
    
    image!: Image;
    
    category!: Category;
    
    manufacture!: Manufacture;
    
    
    engines!: Engine[];
    
    submodels!: Submodel[];
}
