import { ModalComponent } from './../../modal/modal.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

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
    odabraniRacun:string;

    constructor(private http: HttpClient, private _router: Router, public matDialog: MatDialog) { }

    ngOnInit():void  {
       // dohvaća sve račune s API-ja
        this.http.get('http://localhost:8181/ords/in2/api/racuni').pipe(map(res=>res)).subscribe((res:any)=>{
            this.racuni=res.items;
        }) 
    }

    // dohvaća stavke odabranog računa
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

    // sortira podatke
    key: string='racunrc';
    reverse: boolean=false;
    sort(key){
        this.key=key;
        this.reverse=!this.reverse;
    }

    p:number=1;

    // preusmjerava na kreiranje novog računa
    preusmjeriNovi(){
        this._router.navigate(['/racun-novi']);
    }

  
    // generira print verziju računa
    openModal(racunId:string) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.id = racunId;
        dialogConfig.height = "700px";
        dialogConfig.width = "800px";
        const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
      }

}