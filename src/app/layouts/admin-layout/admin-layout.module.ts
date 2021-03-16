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
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


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
    NgxPaginationModule 
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ArtikliComponent,
    ArtiklEditComponent,
    ArtiklNoviComponent,
    PartneriComponent,
    PartnerEditComponent,
    PartnerNoviComponent,
    KorisniciComponent,
    KoirisnikEditComponent,
    KorisnikNoviComponent
  ]
})

export class AdminLayoutModule {}
