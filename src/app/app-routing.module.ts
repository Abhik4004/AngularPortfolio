import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CollaborationPartnerShipComponent } from './collaboration-partner-ship/collaboration-partner-ship.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchProjectComponent } from './research-project/research-project.component';
import { SkillsExpertiseComponent } from './skills-expertise/skills-expertise.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'collab',
    component: CollaborationPartnerShipComponent,
  },
  {
    path: 'publication',
    component: PublicationsComponent,
  },
  {
    path: 'research',
    component: ResearchProjectComponent,
  },
  {
    path: 'Skills',
    component: SkillsExpertiseComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
