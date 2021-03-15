import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { param } from 'jquery';


@Component({
    selector:'artikl-edit',
    templateUrl:'./artikl-edit.component.html'
})

export class ArtiklEditComponent implements OnInit { 
    id;
    artikl;
    idArtikla=0;
    broj=0;
    naziv=" ";
    jed_mjere=" ";
    porez=0;
    cijena=0;
    constructor(private route: ActivatedRoute, private http: HttpClient){
    
    }
    ngOnInit(){
        this.id = this.route.snapshot.paramMap.get('id');
        
        this.http.get('http://localhost:8181/ords/in2/api/artikli?id='+this.id).pipe(map(res=>res)).subscribe((res:any)=>{
            this.artikl=res.items;
            this.idArtikla=this.artikl[0].id;          
            this.broj=this.artikl[0].broj;
            this.naziv=this.artikl[0].naziv;
            this.jed_mjere=this.artikl[0].jedinica_mjere;
            this.porez=this.artikl[0].porez;
            this.cijena=this.artikl[0].cijena;
        }) 

        
    }

    spremiPromjene(){
        console.log("novi broj"+this.broj);
    }
    

}