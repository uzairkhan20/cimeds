import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { AccrediationsComponent } from './accrediations/accrediations.component';
import { CampusComponent } from './campus/campus.component';
import { TeamComponent } from './team/team.component';
import { PartnerComponent } from './partner/partner.component';
import { PedagogyComponent } from './pedagogy/pedagogy.component';
import { TechnologyinitiativeComponent } from './technologyinitiative/technologyinitiative.component';
import { QualitypolicyComponent } from './qualitypolicy/qualitypolicy.component';
import { ApplicationportalComponent } from './applicationportal/applicationportal.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { FinancialaidComponent } from './financialaid/financialaid.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GlobalmdComponent } from './globalmd/globalmd.component';
import { MbbsComponent } from './mbbs/mbbs.component';
import { UsmleComponent } from './usmle/usmle.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './connection.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LeadershipComponent,
    AccrediationsComponent,
    CampusComponent,
    TeamComponent,
    PartnerComponent,
    PedagogyComponent,
    TechnologyinitiativeComponent,
    QualitypolicyComponent,
    ApplicationportalComponent,
    AdmissionsComponent,
    FinancialaidComponent,
    ScholarshipComponent,
    ContactusComponent,
    GlobalmdComponent,
    MbbsComponent,
    UsmleComponent,
    PrivacypolicyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
