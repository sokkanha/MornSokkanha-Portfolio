import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ResumeComponent } from './resume/resume.component';


@NgModule({
  declarations: [HomeComponent, SkillComponent, ProjectsComponent, EducationComponent, ResumeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
