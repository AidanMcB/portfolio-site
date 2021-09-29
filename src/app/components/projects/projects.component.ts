import { Component, OnInit } from '@angular/core';
import demoProjects from '../../../assets/data/projects.json'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public readonly projects = demoProjects;

  constructor() { }

  ngOnInit(): void {
    console.log(this.projects)
  }

}
