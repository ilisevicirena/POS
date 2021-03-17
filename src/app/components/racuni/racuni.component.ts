
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'racuni',
    templateUrl:'./racuni.component.html'
})

export class RacuniComponent implements OnInit{ 
    racuni=[]; 
    public filter: string;
    stavke=[];
    tekst="Prikaži detalje";
    iznos=0;
    constructor(private http: HttpClient, private _router: Router) { }
    ngOnInit():void  {
       
        this.http.get('http://localhost:8181/ords/in2/api/racuni').pipe(map(res=>res)).subscribe((res:any)=>{
            this.racuni=res.items;
        }) 
    }

    dohvatiStavke(id_racuna){
      
        let izn=0;
        this.http.get('http://localhost:8181/ords/in2/api/stavke?id='+id_racuna).pipe(map(res=>res)).subscribe((res:any)=>{
            this.stavke=res.items;

            for(let e of this.stavke){
                izn=izn+e.ukupno as number;
            }
            this.iznos=izn;
        
        }) 
        
    }

    key: string='racunrc';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    

    preusmjeriNovi(){
        this._router.navigate(['/racun-novi']);
    }

}