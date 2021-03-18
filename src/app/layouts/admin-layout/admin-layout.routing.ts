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
import { ArtikliComponent } from './../../components/artikli/artikli.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'artikli',      component: ArtikliComponent },
    { path: 'artikl-edit',      component: ArtiklEditComponent },
    { path: 'artikl-novi',      component: ArtiklNoviComponent },
    { path: 'partneri',      component: PartneriComponent },
    { path: 'partner-edit',      component: PartnerEditComponent },
    { path: 'partner-novi',      component: PartnerNoviComponent },
    { path: 'korisnici',      component: KorisniciComponent },
    { path: 'korisnik-edit',      component: KoirisnikEditComponent },
    { path: 'korisnik-novi',      component: KorisnikNoviComponent },
    { path: 'vrste-racuna',      component: VrsteRacunaComponent },
    { path: 'vrste-racuna-edit',      component: VrstaRacunaEditComponent },
    { path: 'vrste-racuna-novi',      component: VrstaRacunaNoviComponent },
    { path: 'racuni',      component: RacuniComponent },
    { path: 'racun-novi',      component: RacunNoviComponent },
    
];
