import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ResearchProjectComponent } from './research-project/research-project.component';
import { PublicationsComponent } from './publications/publications.component';
import { SkillsExpertiseComponent } from './skills-expertise/skills-expertise.component';
import { CollaborationPartnerShipComponent } from './collaboration-partner-ship/collaboration-partner-ship.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResearchProjectComponent,
    PublicationsComponent,
    SkillsExpertiseComponent,
    CollaborationPartnerShipComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
