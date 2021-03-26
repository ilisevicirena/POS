// klasa koja definira strukturu artikla
export class Artikl{
    Id: number;
    Broj: number;
    Naziv: string;
    JedinicaMjere: string;
    Porez: number;
    Cijena: number;

    constructor(id:number, broj:number, naziv:string, jedmjere:string, porez:number, cijena:number){
        this.Id=id;
        this.Broj=broj;
        this.Naziv=naziv;
        this.JedinicaMjere=jedmjere;
        this.Porez=porez;
        this.Cijena=cijena;
    }
}