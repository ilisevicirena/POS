
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'partneri',
    templateUrl:'./partneri.component.html'
})

export class PartneriComponent implements OnInit{ 
    partneri=[]; 
    public filter: string;
    constructor(private http: HttpClient, private _router: Router) { }
    ngOnInit():void  {
       
        this.http.get('http://localhost:8181/ords/in2/api/partner').pipe(map(res=>res)).subscribe((res:any)=>{
            this.partneri=res.items;
        }) 
    }

    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    preusmjeriEdit(id_artikla){
        this._router.navigate(['/partner-edit', {id: id_artikla}]);
    }

    preusmjeriNovi(){
        this._router.navigate(['/partner-novi']);
    }

}