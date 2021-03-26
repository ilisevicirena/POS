import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  racunid:string=this.dialogRef.id;
  constructor(public dialogRef: MatDialogRef<ModalComponent> , private http: HttpClient) { }
  racuni=[];
  stavke=[];
  iznos=0;

  ngOnInit(): void {

    this.http.get('http://localhost:8181/ords/in2/api/racuni?id='+this.racunid).pipe(map(res=>res)).subscribe((res:any)=>{
      this.racuni=res.items;
    });

    
        this.http.get('http://localhost:8181/ords/in2/api/stavke?id='+this.racunid).pipe(map(res=>res)).subscribe((res:any)=>{
            this.stavke=res.items;

            for(let e of this.stavke){
                this.iznos=this.iznos+e.ukupno as number;
            }
           
        });


  }

 

  
 
  closeModal() {
    this.dialogRef.close();
    console.log(this.racuni);
  }

}
