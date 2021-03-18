export class VrstaRacuna{
    Id: number;
  
    Naziv: string;
    Opis: string;
   

    constructor(id:number,  naziv:string, opis:string){
        this.Id=id;
      
        this.Naziv=naziv;
        this.Opis=opis;
       

    }
}