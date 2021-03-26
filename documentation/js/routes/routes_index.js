var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app.routing.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"dashboard","pathMatch":"full"},{"path":"","component":"AdminLayoutComponent","children":[{"path":"","loadChildren":"./layouts/admin-layout/admin-layout.module#AdminLayoutModule","children":[{"kind":"module","children":[{"name":"AdminLayoutRoutes","filename":"src/app/layouts/admin-layout/admin-layout.routing.ts","module":"AdminLayoutModule","children":[{"path":"dashboard","component":"DashboardComponent"},{"path":"artikli","component":"ArtikliComponent"},{"path":"artikl-edit","component":"ArtiklEditComponent"},{"path":"artikl-novi","component":"ArtiklNoviComponent"},{"path":"partneri","component":"PartneriComponent"},{"path":"partner-edit","component":"PartnerEditComponent"},{"path":"partner-novi","component":"PartnerNoviComponent"},{"path":"korisnici","component":"KorisniciComponent"},{"path":"korisnik-edit","component":"KoirisnikEditComponent"},{"path":"korisnik-novi","component":"KorisnikNoviComponent"},{"path":"vrste-racuna","component":"VrsteRacunaComponent"},{"path":"vrste-racuna-edit","component":"VrstaRacunaEditComponent"},{"path":"vrste-racuna-novi","component":"VrstaRacunaNoviComponent"},{"path":"racuni","component":"RacuniComponent"},{"path":"racun-novi","component":"RacunNoviComponent"}],"kind":"module"}],"module":"AdminLayoutModule"}]}],"canActivate":["AuthGaurdService"]},{"path":"login","component":"LoginComponent"},{"path":"logout","component":"LogoutComponent","canActivate":["AuthGaurdService"]}],"kind":"module"}]}
