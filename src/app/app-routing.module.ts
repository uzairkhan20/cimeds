import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AccrediationsComponent } from './accrediations/accrediations.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ApplicationportalComponent } from './applicationportal/applicationportal.component';
import { CampusComponent } from './campus/campus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FinancialaidComponent } from './financialaid/financialaid.component';
import { LeadershipComponent } from './leadership/leadership.component';
import { PartnerComponent } from './partner/partner.component';
import { PedagogyComponent } from './pedagogy/pedagogy.component';
import { QualitypolicyComponent } from './qualitypolicy/qualitypolicy.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';
import { TeamComponent } from './team/team.component';
import { TechnologyinitiativeComponent } from './technologyinitiative/technologyinitiative.component';
import { MbbsComponent } from './mbbs/mbbs.component';
import { UsmleComponent } from './usmle/usmle.component';
import { GlobalmdComponent } from './globalmd/globalmd.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accrediations', component: AccrediationsComponent },
  { path: 'admission', component: AdmissionsComponent },
  { path: 'applicationportal', component: ApplicationportalComponent },
  { path: 'campus', component: CampusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'financialaid', component: FinancialaidComponent },
  { path: 'leadership', component: LeadershipComponent },
  { path: 'partner', component: PartnerComponent },
  { path: 'pedagogy', component: PedagogyComponent },
  { path: 'qualitypolicy', component: QualitypolicyComponent },
  { path: 'scholarship', component: ScholarshipComponent },
  { path: 'team', component: TeamComponent },
  { path: 'technologyinitiative', component: TechnologyinitiativeComponent },
  { path: 'mbbs', component: MbbsComponent },
  { path: 'usmle', component: UsmleComponent },
  { path: 'globalmd', component: GlobalmdComponent },
  { path: 'privacypolicy', component: PrivacypolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
