import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector:'artikl-novi',
    templateUrl:'./artikl-novi.component.html'
})

export class ArtiklNoviComponent implements OnInit { 
    //ngModel varijable
    idArtikla:number;
    broj:number;
    naziv:string;
    jed_mjere:string;
    porez:number;
    cijena:number;

    constructor(private route: ActivatedRoute, private http: HttpClient, private _router: Router){}

    ngOnInit(){}

    // šalje podatke na API za kreiranje novog artikla
    spremiPromjene(){
        this.http.post("http://localhost:8181/ords/in2/api/artikli",
        {            
        "naziv":  this.naziv,       
        "broj": this.broj,
        "jed_mjere": this.jed_mjere,
        "porez" : this.porez,
        "cijena" : this.cijena      
        })    
        .subscribe(     
        data  => {
        // prikazuje obavijest u slučaju uspjeha i preusmjerava na prikaz svih artikala
            this.prikaziObavijest();
            this.preusmjeri();
        },       
        error  => {   
            console.log(error);  
        }     
        );
    }

    // kreira obavijest uspjeha
    prikaziObavijest(){
        const type = ['','info','success','warning','danger'];
        let color = 2;     
        $.notify({
          icon: "notifications",
          message: "Novi artikl uspješno dodan!"
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

    // preusmjerava na prikaz svih artikala
    preusmjeri(){
        this._router.navigate(['/artikli']);
    }
}