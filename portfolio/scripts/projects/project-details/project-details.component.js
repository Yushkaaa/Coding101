import { BaseComponent } from "../../shared/components/base.component.js";

export class ProjectsDetailsComponent extends BaseComponent{
  constructor({element}){
     super({element}); 
     this.on('click', '.back',(e)=>{
      this.emitEvent('back')
     })
  }
  show(projectDetails){
    this._project = projectDetails;
    this._render();
    super.show(); 
  } 
     
     
    _render(){
        const {projectName,projectDetails,images, fullVersion, gitHub} = this._project
        this._element.innerHTML = `
  
        <body>
        <!-- Header Section -->
         <header>
           <nav class="flex">
             <div class="menu">
              <h2>Ekaterina Yush</h2>
             </div>
         </nav>
         </header>
         <main class = "main-cont details-block" >
             <div class="img-block">
               <button class="back details-button">Back</button>
               <img class="details-img" src="${images}">
             </div>  
             <div class="info-block">
               <div class="project-name">
                   <h2 class="proj-name">${projectName}</h2>
               </div>
               <div class="project-info">
                   <p>${projectDetails}</p>
               </div>
               <a href="./resources/website/ColmarAcademy/index.html" target="_blank"><button class="details-button">See full version</button></a>
               <a href="${gitHub}" target="_blank"><button class="details-button" >GitHub</button></a>
       
             </div>
             
         </main>
       
       
       
       </body>
        `
    }}