export class ProjectsCatalogComponent{
    constructor({element, projects}){
        this._element = element;
        this._projects = projects;
        this._render();
        

    }     
     
     
    _render(){
        this._element.innerHTML = `
        <div class="projects-list">
        ${this._projects.map((project) => `
              <div class="project">
                <div class="image">
                  <a href="./resources/website/${project.name}/index.html"  target="_blank"> <img class="img-responsive" src="${project.imageUrl}"> </a>
                </div>
                <div class="details">
                  <h3>${project.name}</h3>
                  <h5><a href="resources/website/${project.name}/${project.id}.png" target="_blank">Design specification</a></h5>
                </div>
              </div>`).join('')} 
              

        `
    }}