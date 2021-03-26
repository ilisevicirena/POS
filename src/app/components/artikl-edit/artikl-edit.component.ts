import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

declare var $: any;

@Component({
    selector:'artikl-edit',
    templateUrl:'./artikl-edit.component.html'
})

export class ArtiklEditComponent implements OnInit { 
    Id : any;
    Artikl : any;

    //ngModel varijable
    IdArtikla = 0;
    Broj = 0;
    Naziv = " ";
    JedMjere = " ";
    Porez = 0;
    Cijena = 0;
    
    constructor(private route: ActivatedRoute, private http: HttpClient){}
    
    ngOnInit(){
        // dohvaćanje trenutnih podatka s API-ja za prikaz korisniku
        this.Id = this.route.snapshot.paramMap.get('id');       
        this.http.get('http://localhost:8181/ords/in2/api/artikli?id='+this.Id).pipe(map(res=>res)).subscribe((res:any)=>{
            this.Artikl=res.items;
            this.IdArtikla=this.Artikl[0].id;          
            this.Broj=this.Artikl[0].broj;
            this.Naziv=this.Artikl[0].naziv;
            this.JedMjere=this.Artikl[0].jedinica_mjere;
            this.Porez=this.Artikl[0].porez;
            this.Cijena=this.Artikl[0].cijena;
        })         
    }

    // šalje promjene na API
    spremiPromjene(){
        this.http.put("http://localhost:8181/ords/in2/api/artikli",
        {        
        "id":  this.IdArtikla,       
        "naziv":  this.Naziv,       
        "broj": this.Broj,
        "jed_mjere": this.JedMjere,
        "porez" : this.Porez,
        "cijena" : this.Cijena      
        })    
        .subscribe(data  => {           
        this.prikaziObavijest();
        },
        error  => { }       
        );
    }

    // generira obavijest o uspjehu spremanja promjena
    prikaziObavijest(){
        const type = ['','info','success','warning','danger'];
        let color = 2;
        $.notify({
          icon: "notifications",
          message: "Promjene uspješno spremljene."
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