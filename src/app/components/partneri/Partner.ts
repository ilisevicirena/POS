export class Partner{
    Id: number;
    Broj: number;
    Naziv: string;
    Adresa: string;
    Mjesto: string;
   
    constructor(id:number, broj:number, naziv:string, adresa:string, mjesto:string){
        this.Id=id;
        this.Broj=broj;
        this.Naziv=naziv;
        this.Adresa=adresa;
        this.Mjesto=mjesto;
       
    }
}