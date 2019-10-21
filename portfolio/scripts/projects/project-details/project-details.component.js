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
        const {projectName,projectDetails,images, fullVersion} = this._project
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
         <main class = "main-cont>
             <div class="img-block">
               <button class="back">Back</button>
               <img src="${images}">
             </div>  
             <div class="info-block">
               <div class="project-name">
                   <h2>${projectName}</h2>
               </div>
               <div class="project-info">
                   <p>${projectDetails}</p>
               </div>
               <button src="${fullVersion}">See full version</button>
       
             </div>
             
         </main>
       
       
       
       </body>
        `
    }}