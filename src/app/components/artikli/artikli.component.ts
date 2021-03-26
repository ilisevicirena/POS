import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'artikli',
    templateUrl:'./artikli.component.html'
})

export class ArtikliComponent implements OnInit{ 
    Artikli=[]; 
    public Filter: string;

    constructor(private http: HttpClient, private _router: Router) { }
    
    ngOnInit():void  {
        // dohvaća sve artikle s API-ja      
        this.http.get('http://localhost:8181/ords/in2/api/artikli').pipe(map(res=>res)).subscribe((res:any)=>{
            this.Artikli=res.items;
        }) 
    }

    // sortiranje podataka u tablici
    key: string='id';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    //ngModel
    p:number=1;

    // preusmjerava na uređivanje odabranog artikla
    preusmjeriEdit(id_artikla){
        this._router.navigate(['/artikl-edit', {id: id_artikla}]);
    }

    // preusmjerava na kreiranje novog artikla
    preusmjeriNovi(){
        this._router.navigate(['/artikl-novi']);
    }

}