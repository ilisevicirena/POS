import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  korisnik=[];
  constructor(private http: HttpClient) {

   }

  async getData(username,password){
    
     await this.http.get('http://localhost:8181/ords/in2/api/prijava?korime='+username+'&lozinka='+password).toPromise().then((response:any)=>{
        this.korisnik.push(...response.items);
      });
      
  }

  async authenticate(username, password) {
   
    username=username.toUpperCase();
    await this.getData(username,password);

    if (this.korisnik.length==1) {
      sessionStorage.setItem('username', username)
      this.korisnik=[];
      return true;
    } else {
      this.prikaziObavijest();
      console.log("duzina2 "+this.korisnik.length);
      this.korisnik=[];
      return false;
    }
    
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    this.korisnik=[];
  }


  prikaziObavijest(){
    const type = ['','info','success','warning','danger'];
    let color = 4;     
    console.log("boja: "+color);
    $.notify({
      icon: "notifications",
      message: "Pogrešno korisničko ime ili lozinka!"
  },{
      type: type[color],
      timer: 4000,
      placement: {
          from: 'top',
          align: 'right'
      },
      template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
        '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
        '<i class="material-icons" data-notify="icon">notifications</i> ' +
        '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
          '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
      '</div>'
  });
}
}
