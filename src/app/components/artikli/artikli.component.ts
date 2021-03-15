import { ArtiklEditComponent } from './../artikl-edit/artikl-edit.component';
import { HttpClient } from '@angular/common/http';
import { Artikl } from './artikl.class';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'artikli',
    templateUrl:'./artikli.component.html'
})

export class ArtikliComponent implements OnInit{ 
    artikli=[]; 
    public filter: string;
    constructor(private http: HttpClient, private _router: Router) { }
    ngOnInit():void  {
       
        this.http.get('http://localhost:8181/ords/in2/api/artikli').pipe(map(res=>res)).subscribe((res:any)=>{
            this.artikli=res.items;
            console.log(res);  
            console.log(this.artikli);      
        }) 
    }

    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    routeWithData(id_artikla){
        console.log("kliknuo me"+id_artikla);
        this._router.navigate(['/artikl-edit', {id: id_artikla}]);
    }

}