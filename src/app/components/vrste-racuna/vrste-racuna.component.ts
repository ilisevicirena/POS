
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'vrste-racuna',
    templateUrl:'./vrste-racuna.component.html'
})

export class VrsteRacunaComponent implements OnInit{ 
    vrste=[]; 
    public filter: string;
    constructor(private http: HttpClient, private _router: Router) { }
    ngOnInit():void  {
       
        this.http.get('http://localhost:8181/ords/in2/api/vrsteRacuna').pipe(map(res=>res)).subscribe((res:any)=>{
            this.vrste=res.items;
        }) 
    }

    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    preusmjeriEdit(id_vrste){
        this._router.navigate(['/vrste-racuna-edit', {id: id_vrste}]);
    }

    preusmjeriNovi(){
        this._router.navigate(['/vrste-racuna-novi']);
    }

}