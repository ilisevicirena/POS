
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'partneri',
    templateUrl:'./partneri.component.html'
})

export class PartneriComponent implements OnInit{ 
    partneri = []; 
    public filter : string;

    constructor(private http: HttpClient, private _router: Router) { }

    ngOnInit():void  {
       // dohvaća podatke o partnerima s API-ja
        this.http.get('http://localhost:8181/ords/in2/api/partner').pipe(map(res=>res)).subscribe((res:any)=>{
            this.partneri=res.items;
        }) 
    }

    // sortira podatke
    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    //ngModel
    p:number=1;

    // preumsjerava na uređivanje odabranog partnera
    preusmjeriEdit(id_partnera){
        this._router.navigate(['/partner-edit', {id: id_partnera}]);
    }

    // preusmjerava na kreiranje novog partnera
    preusmjeriNovi(){
        this._router.navigate(['/partner-novi']);
    }

}