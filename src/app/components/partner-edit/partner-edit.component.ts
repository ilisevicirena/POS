import { browser } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { param } from 'jquery';

declare var $: any;

@Component({
    selector:'partner-edit',
    templateUrl:'./partner-edit.component.html'
})

export class PartnerEditComponent implements OnInit { 
    id;
    partner;
    idPartnera=0;
    broj=0;
    naziv=" ";
    adresa=" ";
    mjesto=" ";
    constructor(private route: ActivatedRoute, private http: HttpClient){  
    }
    ngOnInit(){
        this.id = this.route.snapshot.paramMap.get('id');      
        this.http.get('http://localhost:8181/ords/in2/api/partner?id='+this.id).pipe(map(res=>res)).subscribe((res:any)=>{
            this.partner=res.items;
            this.idPartnera=this.partner[0].id;          
            this.broj=this.partner[0].broj;
            this.naziv=this.partner[0].naziv;
            this.adresa=this.partner[0].adresa;
            this.mjesto=this.partner[0].mjesto;          
        })    
    }

    spremiPromjene(){
        this.http.put("http://localhost:8181/ords/in2/api/partner",
        {        
        "id":  this.idPartnera,       
        "naziv":  this.naziv,       
        "broj": this.broj,
        "adresa": this.adresa,
        "mjesto" : this.mjesto,
        })    
        .subscribe(    
        data  => {              
        this.prikaziObavijest();
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
          message: "Promjene uspješno spremljene."

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
    

}