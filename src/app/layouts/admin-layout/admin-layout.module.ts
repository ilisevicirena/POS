import { ModalComponent } from './../../modal/modal.component';

import { RacunNoviComponent } from './../../components/racun-novi/racun-novi.component';
import { RacuniComponent } from './../../components/racuni/racuni.component';
import { VrstaRacunaNoviComponent } from './../../components/vrsta-racuna-novi/vrsta-racuna-novi.component';
import { VrstaRacunaEditComponent } from './../../components/vrsta-racuna-edit/vrsta-racuna-edit.component';
import { VrsteRacunaComponent } from './../../components/vrste-racuna/vrste-racuna.component';
import { KorisnikNoviComponent } from './../../components/korisnik-novi/korisnik-novi.component';
import { KoirisnikEditComponent } from './../../components/korisnik-edit/korisnik-edit.component';
import { KorisniciComponent } from './../../components/korisnici/korisnici.component';
import { PartnerNoviComponent } from './../../components/partner-novi/partner-novi.component';
import { PartnerEditComponent } from './../../components/partner-edit/partner-edit.component';
import { PartneriComponent } from './../../components/partneri/partneri.component';
import { ArtiklNoviComponent } from './../../components/atrikl-novi/artikl-novi.component';
import { ArtiklEditComponent } from './../../components/artikl-edit/artikl-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtikliComponent } from './../../components/artikli/artikli.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { Ng2CompleterModule } from 'ng2-completer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    Ng2CompleterModule,
    MatDialogModule
    
  ],
  declarations: [
    DashboardComponent,
    ArtikliComponent,
    ArtiklEditComponent,
    ArtiklNoviComponent,
    PartneriComponent,
    PartnerEditComponent,
    PartnerNoviComponent,
    KorisniciComponent,
    KoirisnikEditComponent,
    KorisnikNoviComponent,
    VrsteRacunaComponent,
    VrstaRacunaEditComponent,
    VrstaRacunaNoviComponent,
    RacuniComponent,
    RacunNoviComponent,
    ModalComponent,
    
  ],
  providers:[
    
  ],
  entryComponents: [ModalComponent]
})

export class AdminLayoutModule {}
