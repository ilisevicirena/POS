'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">material-dashboard-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminLayoutModule.html" data-type="entity-link">AdminLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminLayoutModule-259e1b8a7115e621179835bf407bf945"' : 'data-target="#xs-components-links-module-AdminLayoutModule-259e1b8a7115e621179835bf407bf945"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminLayoutModule-259e1b8a7115e621179835bf407bf945"' :
                                            'id="xs-components-links-module-AdminLayoutModule-259e1b8a7115e621179835bf407bf945"' }>
                                            <li class="link">
                                                <a href="components/ArtiklEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtiklEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtiklNoviComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtiklNoviComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtikliComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtikliComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KoirisnikEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KoirisnikEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KorisniciComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KorisniciComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KorisnikNoviComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KorisnikNoviComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PartnerEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartnerEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PartnerNoviComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartnerNoviComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PartneriComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartneriComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RacunNoviComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RacunNoviComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RacuniComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RacuniComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VrstaRacunaEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VrstaRacunaEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VrstaRacunaNoviComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VrstaRacunaNoviComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VrsteRacunaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VrsteRacunaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4e453a15aaa30bc4fd33ce292f107e3f"' : 'data-target="#xs-components-links-module-AppModule-4e453a15aaa30bc4fd33ce292f107e3f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4e453a15aaa30bc4fd33ce292f107e3f"' :
                                            'id="xs-components-links-module-AppModule-4e453a15aaa30bc4fd33ce292f107e3f"' }>
                                            <li class="link">
                                                <a href="components/AdminLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LogoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-5b4c746b7472f3ba88172d0f136066a6"' : 'data-target="#xs-components-links-module-ComponentsModule-5b4c746b7472f3ba88172d0f136066a6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-5b4c746b7472f3ba88172d0f136066a6"' :
                                            'id="xs-components-links-module-ComponentsModule-5b4c746b7472f3ba88172d0f136066a6"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Artikl.html" data-type="entity-link">Artikl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Partner.html" data-type="entity-link">Partner</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stavka.html" data-type="entity-link">Stavka</a>
                            </li>
                            <li class="link">
                                <a href="classes/VrstaRacuna.html" data-type="entity-link">VrstaRacuna</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGaurdService.html" data-type="entity-link">AuthGaurdService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/RouteInfo.html" data-type="entity-link">RouteInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});