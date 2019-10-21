import { BaseComponent } from "../../shared/components/base.component.js";
import{ProjectsService} from "../project.service.js"

export const projects = ProjectsService.getAll();

export class ProjectsCatalogComponent extends BaseComponent{
    constructor({element, projects}){
        super({element})
        this._projects = projects;
        this._render();
        this.on('click', ".project", (e)=>{
          this.emitEvent('project-select', e.delegateTarget.dataset.projectId)
        });

    }     
     
     
    _render(){
        this._element.innerHTML = `
        <div class="projects-list">
        ${this._projects.map((project) => `
              <div class="project" data-project-id=${project.id}>
                <div class="image">
                  <img class="img-responsive" src="${project.imageUrl}">
                </div>
                <div class="details">
                  <h3>${project.name}</h3>
                  <h5><a href="resources/website/${project.name}/${project.id}.png" target="_blank">Design specification</a></h5>
                </div>
              </div>`).join('')} 
              

        `
    }}