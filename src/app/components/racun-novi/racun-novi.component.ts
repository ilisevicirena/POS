import { Partner } from './../partneri/Partner';
import { VrstaRacuna } from './../vrste-racuna/VrstaRacuna';
import { Artikl } from './../artikli/artikl.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, ElementRef, AfterContentInit } from '@angular/core';
import { map, startWith } from 'rxjs/operators';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Stavka } from './Stavka';
import { DatePipe, formatCurrency, formatDate } from '@angular/common';

declare var $: any;

@Component({
    selector:'racun-novi',
    templateUrl:'./racun-novi.component.html'
})

export class RacunNoviComponent implements OnInit { 
   //stavka
    nazivArtikla:string;
    kolicina:number;
    cijena:number;
    pdv:number;
    osnovica:number;
    iznosPDV:number;
    ukupno:number;
    broj:string;
    
  //racun
    idRacuna:number;
    brojRacuna:number;
    datumRacuna:any;
    korisnik:string;
    vrstaRacuna:string;
    partner:string;
    napomena:string;

  //iznos računa
    osnovicaRacuna:number=0;
    iznospdvRacuna:number=0;
    iznosRacuna:number=0;

  //form controls
    myControl : FormControl = new FormControl();
    myControl2 : FormControl = new FormControl();
    myControl3 : FormControl = new FormControl();

  //array-i za podatke s API-ja
    artikli = [];
    partneriItems=[];
    vrsteRacuna=[];

  //array-i za filtrirane podatke autocomplete
    filteredOptions: Observable<string[]>;
    filteredPartneri: Observable<string[]>;

  //array-i za uređene podatke s API-ja = real data here
    options=[]; 
    vrste=[];
    partneri=[];
  
  //array za stavke računa
    stavke:Array<Stavka>=[];

  //objekti
    trenutnaStavka : Stavka;
    trenutniPartner:Partner;
    trenutnaVrsta:VrstaRacuna;

  //return - id novokreiranog računa
    returnID:any;

    constructor(private route: ActivatedRoute, private http: HttpClient, private _router: Router, private elementRef: ElementRef){}

    ngOnInit(){
      // dohvaća sve artikle s API-ja za select
      this.http.get('http://localhost:8181/ords/in2/api/artikli').pipe(map(res=>res)).subscribe((res:any)=>{
        this.artikli=res.items;
      }) 

      // dohvaća sve vrste računa za select
      this.http.get('http://localhost:8181/ords/in2/api/vrsteRacuna').pipe(map(res=>res)).subscribe((res:any)=>{
            this.vrsteRacuna=res.items;
      }) 

      // dohvaća sve partnere za select
      this.http.get('http://localhost:8181/ords/in2/api/partner').pipe(map(res=>res)).subscribe((res:any)=>{
          this.partneriItems=res.items;
      }) 
    
      // onChange event provjerava promjenu u input box-u za broj artikla
      this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''), map(value=>this._filter(value))
      );
      
      // onChange event provjerava promjenu u input box-u za partnere
      this.filteredPartneri=this.myControl3.valueChanges.pipe(
      startWith(''), map(value=>this.filter(value))
      );

      // popunjavanje korisnika i datuma default vrijednostima
      this.korisnik=sessionStorage.getItem("username");
      this.datumRacuna=new Date();        
    }

    // postavlja vrijednost u autocomplete broj artikla
    getOptionText(option) {
      return option.Broj;
    }

    // postavlja vrijednost u autocomplete partner
    getOptionText2(option) {
      return option.Naziv;
    }

    // kada se promjeni focus s input box-a broj artikla, prebacuje focus na količinu i popunjava ostale input-e ovisno o odabanom artiklu
    focusChange(artikl:Artikl){     
      this.nazivArtikla=artikl.Naziv;
      this.cijena=artikl.Cijena;
      this.pdv=artikl.Porez;    
      $('#kolicina_id').focus();
      // kreira novu stavku 
      this.trenutnaStavka=new Stavka();
      this.trenutnaStavka.Artikl=artikl;
      this.trenutnaStavka.Cijena=this.cijena;
      this.trenutnaStavka.PDV=this.pdv;

    }

    // računa iznose odabrane stavke i njima popunjava inpute
    izracunaj(){
        this.osnovica= Math.round(((this.kolicina*this.cijena) + Number.EPSILON) * 100) / 100;
        this.iznosPDV= Math.round((((this.kolicina*this.cijena*this.pdv)/100) + Number.EPSILON) * 100) / 100; 
        this.ukupno=Math.round(((((this.kolicina*this.cijena*this.pdv)/100)+(this.kolicina*this.cijena)) + Number.EPSILON) * 100) / 100;   
        this.trenutnaStavka.Kolicina=this.kolicina;
        this.trenutnaStavka.Osnovica=this.osnovica;
        this.trenutnaStavka.IznosPDVa=this.iznosPDV;
        this.trenutnaStavka.Ukupno=this.ukupno;
    }
    
    // učitava podatke u liste za autocomplete i select
    ucitajPodatke(event: any){    
      this.options=[];
      this.vrste=[];
      this.partneri=[];
      
      for(let artikl of this.artikli){
        let novi=new Artikl(artikl.id, artikl.broj, artikl.naziv, artikl.jedinica_mjere, artikl.porez as number, artikl.cijena as number)
        this.options.push(novi);  
      } 

      for (let vrsta of this.vrsteRacuna){
        let nova=new VrstaRacuna(vrsta.id, vrsta.naziv, vrsta.opis )
        this.vrste.push(nova);
      }

      for (let partner of this.partneriItems){
        let novi=new Partner(partner.id,partner.broj,partner.naziv,partner.adresa,partner.mjesto)
        this.partneri.push(novi);
      }

      // postavlja default odabrane vrijednosti
      this.vrstaRacuna=this.vrste[3];
      this.partner=this.partneri[0];
      this.trenutniPartner=this.partneri[0];
      this.trenutnaVrsta=this.vrste[3];   
    }

    // prebacuje focus na odabir partnera nakon odabira vrste računa
    odaberiVrstu(vrsta:VrstaRacuna){
      this.trenutnaVrsta=vrsta;
      $('#partner_id').focus();
    }

    // prebacuje focus na unos napomene nakon odabira partnera
    odaberiPartnera(partner:Partner){
      this.trenutniPartner=partner;
      $('#napomena_id').focus();
    }

    // dodaje novu stavku u listu stavki i prebacuje focus na unos novog broja artikla
    dodajStavku(){
      this.stavke.push(this.trenutnaStavka);
      this.myControl.reset('');
      this.nazivArtikla='';
      this.kolicina=undefined;
      this.cijena=undefined;
      this.pdv=undefined;
      this.osnovica=undefined;
      this.iznosPDV=undefined;
      this.ukupno=undefined;
      this.izracunajIznosRacuna();    
      $('#broj_id').focus();
    }

    // izračunava iznos računa
    izracunajIznosRacuna(){
      this.osnovicaRacuna=0;
      this.iznospdvRacuna=0;
      this.iznosRacuna=0;
      this.stavke.forEach(element => {
        this.osnovicaRacuna+=element.Osnovica;
        this.iznospdvRacuna+=element.IznosPDVa;
        this.iznosRacuna+=element.Ukupno;    
      });
      this.osnovicaRacuna=Math.round(((this.osnovicaRacuna) + Number.EPSILON) * 100) / 100;
      this.iznospdvRacuna=Math.round(((this.iznospdvRacuna) + Number.EPSILON) * 100) / 100;
      this.iznosRacuna=Math.round(((this.iznosRacuna) + Number.EPSILON) * 100) / 100;
    }

    // autocomplete filter vrijednosti unosom znakova u input field za broj artikla
    private _filter(value: string): string[] {    
      const filterValue = value;
      return this.options.filter((option : Artikl) => (option.Broj).toString().includes(filterValue));
    }

    // autocomplete filter vrijednosti unosom znakova u input field za partnera
    private filter(value: string): string[] {    
      const filterValue = value;
      return this.partneri.filter((option : Partner) => (option.Naziv).toLowerCase().includes(filterValue));
    }

    // šalje podatke na API za spremanje novog računa
    async spremiRacun(datum, napomena, korisnik, partner, vrstaRacuna){    
      await this.http.post("http://localhost:8181/ords/in2/api/racuni",
        {            
        "datum":  datum,       
        "napomena": napomena,
        "korisnik": korisnik,
        "partner" : partner,
        "vrsta" : vrstaRacuna,
        }, { observe:"response" as "body"})    
        .subscribe(     
        (response:any )=> {
        this.prikaziObavijest();
          this.returnID=response.body;
        },       
        error  => {   
            console.log(error);  
        }     
        );
    }

    pipe = new DatePipe('en-US');

    // provjerava podatke za slanje na API i poziva funkciju za kreiranje računa
    async spremiPromjene(){
        let datum=this.pipe.transform(this.datumRacuna,"dd-MMM-YY");
        let korisnik=sessionStorage.getItem("idKorisnika");
        let partner=this.trenutniPartner.Id;
        let vrsta=this.trenutnaVrsta.Id;
        
        await this.spremiRacun(datum,this.napomena,korisnik,partner,vrsta);
        // čeka se kreiranje računa kako bi se dobio ID računa na temelju koga se spremaju nove stavke tog računa
        setTimeout(()=>{                          
          this.spremiStavke(this.returnID.return as number);
        }, 1000);
    }

    // šalje podatke o stavkama na API
    spremiStavke(racun:number){
      this.stavke.forEach(element => {
        this.http.post("http://localhost:8181/ords/in2/api/stavke",
        {            
        "racun":  racun,       
        "artikl": element.Artikl.Id,
        "kolicina": element.Kolicina,
        "cijena" : element.Cijena,
        "pdv" : element.PDV,
        "osnovica":element.Osnovica,
        "iznospdv":element.IznosPDVa,
        "ukupno":element.Ukupno
        }, { observe:"response" as "body"})    
        .subscribe(     
        (response:any )=> {
        },       
        error  => {   
            console.log(error);  
        }     
        );   
      });
      // preusmjerava na prikaz svih računa
      this._router.navigate(['/racuni']);
    }

    // briše odabranu stavku iz liste stavki i preračunava iznos
    obrisiStavku(stavka:Stavka){
      this.stavke.forEach((element,index)=>{
        if(element==stavka) this.stavke.splice(index,1);
      });
      this.izracunajIznosRacuna();
    }

    // generira obavijest o uspjehu
    prikaziObavijest(){
        const type = ['','info','success','warning','danger'];
        let color = 2;     
        console.log("boja: "+color);
        $.notify({
          icon: "notifications",
          message: "Novi račun uspješno dodan!"
        },{
          type: type[color],
          timer: 4000,
          placement: {
              from: 'top',
              align: 'right'
          },
          template: 
            '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
      });
    }   

}