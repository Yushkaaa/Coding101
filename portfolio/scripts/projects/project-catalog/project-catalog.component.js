import { BaseComponent } from "../../shared/components/base.component.js";

export class ProjectsCatalogComponent extends BaseComponent{
    constructor({element, projects,onProjectSelect}){
        super({element})
        this._projects = projects;
        this._onProjectSelect = onProjectSelect;
        this._render();
        this._element.addEventListener('click', (e)=>{
            let projectEl = e.target.closest('.project');
            if (!projectEl){
                return;
            }
            // console.log(projectEl.dataset.projectId)
            this._onProjectSelect(projectEl.dataset.projectId)
        })

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