import { ArtiklEditComponent } from './../artikl-edit/artikl-edit.component';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'korisnici',
    templateUrl:'./korisnici.component.html'
})

export class KorisniciComponent implements OnInit{ 
    korisnici=[]; 
    public filter: string;
    constructor(private http: HttpClient, private _router: Router) { }
    ngOnInit():void  {
       
        this.http.get('http://localhost:8181/ords/in2/api/korisnici').pipe(map(res=>res)).subscribe((res:any)=>{
            this.korisnici=res.items;
        }) 
    }

    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    preusmjeriEdit(id_korisnika){
        this._router.navigate(['/korisnik-edit', {id: id_korisnika}]);
    }

    preusmjeriNovi(){
        this._router.navigate(['/korisnik-novi']);
    }

}