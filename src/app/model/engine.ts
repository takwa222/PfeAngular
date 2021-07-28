import { Brand } from "./brand";
import { BrandEngine } from "./brand-engine";
import { Part } from "./part";

export class Engine {
    id!: number;
    name!: string;
    //brand:Brand;
    parts!: Part[];
    //engineBrands!: BrandEngine[];
}
