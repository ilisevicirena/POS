import { browser } from 'protractor';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { param } from 'jquery';

declare var $: any;

@Component({
    selector:'partner-novi',
    templateUrl:'./partner-novi.component.html'
})

export class PartnerNoviComponent implements OnInit { 
    idPartnera:number;
    broj:string;
    naziv:string;
    adresa:string;
    mjesto:number;
  
    constructor(private route: ActivatedRoute, private http: HttpClient, private _router: Router){}
    ngOnInit(){}

    spremiPromjene(){

        this.http.post("http://localhost:8181/ords/in2/api/partner",
        {            
        "naziv":  this.naziv,       
        "broj": this.broj,
        "adresa": this.adresa,
        "mjesto" : this.mjesto,
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

    prikaziObavijest(){
        const type = ['','info','success','warning','danger'];
        let color = 2;     
        console.log("boja: "+color);
        $.notify({
          icon: "notifications",
          message: "Novi partner uspješno dodan!"
      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: 'top',
              align: 'right'
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
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

    preusmjeri(){
        this._router.navigate(['/partneri']);
    }
    

}