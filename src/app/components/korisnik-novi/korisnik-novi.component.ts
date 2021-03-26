import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector:'korisnik-novi',
    templateUrl:'./korisnik-novi.component.html'
})

export class KorisnikNoviComponent implements OnInit {
    // ngModel varijable
    idKorisnika:number;
    korime:string;
    lozinka:string;
  
    constructor(private route: ActivatedRoute, private http: HttpClient, private _router: Router){}
    
    ngOnInit(){}

    // šalje podatke na API
    spremiPromjene(){
        this.http.post("http://localhost:8181/ords/in2/api/korisnici",
        {            
        "korime":  this.korime,       
        "lozinka": this.lozinka,
        })    
        .subscribe(     
        data  => {
        this.prikaziObavijest();
        this.preusmjeri();
        },       
        error  => {   
            console.log(error);  
        }     
        );
    }

    // generira obavijest o uspjehu
    prikaziObavijest(){
        const type = ['','info','success','warning','danger'];
        let color = 2;     
        $.notify({
          icon: "notifications",
          message: "Novi korisnik uspješno dodan!"
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

    // preusmjerava na prikaz svih korisnika
    preusmjeri(){
        this._router.navigate(['/korisnici']);
    }
}